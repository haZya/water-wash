import { Close } from '@mui/icons-material';
import {
  Box,
  FormHelperText,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import clsx from 'clsx';
import { IFileUpload, IForm } from 'models/shared';
import { useEffect } from 'react';
import Dropzone, { FileRejection } from 'react-dropzone';
import { Controller, useFormContext, useWatch } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { formatBytes } from 'utils';
import { showMessage } from '../store/messageSlice';

type UploadFile = File & { preview: string };

const FileUpload = ({ name, label, required, width, options }: IFileUpload) => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const xsDown = useMediaQuery(theme.breakpoints.down('xs'));
  const { control, getValues } = useFormContext<IForm>();
  const files: UploadFile[] = useWatch({ name, defaultValue: [] });
  const maxFiles = options.maxFiles ?? Number.POSITIVE_INFINITY;

  const onDropAccepted = (acceptedFiles: File[]) => [
    ...files,
    ...acceptedFiles.reduce((fileQueue: UploadFile[], file) => {
      if (files.length + fileQueue.length >= maxFiles) return fileQueue;

      return [
        ...fileQueue,
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        }),
      ];
    }, []),
  ];

  const onDropRejected = (fileRejections: FileRejection[]) => {
    const distinctErrors = fileRejections
      .flatMap((rej) =>
        rej.errors.filter((err, i, arr) => arr.findIndex((t) => t.code === err.code) === i)
      )
      .filter((err, i, arr) => arr.findIndex((t) => t.code === err.code) === i);

    distinctErrors.map((rej) => {
      const message =
        rej.code === 'too-many-files'
          ? `Select upto ${maxFiles} files only`
          : rej.code === 'file-too-large' && options.maxSize
          ? `File is larger than ${formatBytes(options.maxSize, 2)}`
          : rej.code === 'file-too-small' && options.minSize
          ? `File is smaller than ${formatBytes(options.minSize, 2)}`
          : rej.message;

      dispatch(
        showMessage({
          message,
          variant: 'warning',
        })
      );
    });
  };

  const validator = (file: File) => {
    if (files.findIndex((f) => f.name === file.name) !== -1) {
      return {
        code: 'file-already-exists',
        message: 'The selected file(s) already exists',
      };
    }

    if (files.length >= maxFiles) {
      return {
        code: 'max-files-selected',
        message: 'Maximum number of items have been selected',
      };
    }

    return null;
  };

  const dropzoneOptions = {
    ...options,
    noClick: true, //? https://github.com/react-dropzone/react-dropzone/issues/1107
    onDropRejected,
    validator,
  };

  const handleRemoveFile = (fileName: string) => {
    const fileRemoving = files.find((f) => f.name === fileName);
    const rest = files.filter((f) => f.name !== fileName);

    if (fileRemoving) URL.revokeObjectURL(fileRemoving.preview);
    return rest;
  };

  useEffect(() => {
    return () => {
      // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
      const files = (getValues(name) as UploadFile[]) ?? [];
      files.forEach((file) => URL.revokeObjectURL(file.preview));
    };
  }, [name, getValues]);

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={[]}
      render={({ field: { value, onChange }, formState: { errors } }) => (
        <div
          className={clsx(
            xsDown || width === 'full'
              ? 'col-span-12'
              : width === 'two_thirds'
              ? 'col-span-8'
              : width === 'half'
              ? 'col-span-6'
              : width === 'one_third' && 'col-span-4',
            'space-y-3'
          )}
        >
          <div className="flex">
            <Typography color="text.secondary">
              {label}
              {required && <sup className="text-sm align-sub">*</sup>}
            </Typography>
          </div>
          <Dropzone
            {...dropzoneOptions}
            onDropAccepted={(files) => onChange(onDropAccepted(files))}
          >
            {({ getRootProps, getInputProps }) => (
              <Box
                component="label"
                htmlFor="dropzone-file"
                className={clsx(
                  'relative flex-center w-full h-64 bg-gray-50 hover:bg-gray-100 border-2 rounded-lg border-dashed cursor-pointer',
                  errors[name] ? 'border-red-500' : 'border-gray-300'
                )}
                {...getRootProps()}
              >
                <div className="flex flex-col justify-center items-center pt-5 pb-6">
                  <svg
                    aria-hidden="true"
                    className="mb-3 w-10 h-10 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                    />
                  </svg>
                  <Typography className="mb-2 text-sm text-gray-500">
                    <Typography component="span" className="font-semibold">
                      Click to upload
                    </Typography>{' '}
                    or drag and drop
                  </Typography>
                  <div className="flex flex-col xs:flex-row gap-1">
                    <Typography className="text-xs text-center text-gray-500">
                      PNG, JPEG, WebP, AVIF or GIF
                    </Typography>
                    <Typography className="text-xs text-center text-gray-500">
                      {options.maxSize || options.maxFiles
                        ? `(${options.maxSize ? `MAX. ${formatBytes(options.maxSize, 2)}` : ''}${
                            options.maxSize && options.maxFiles ? ' ' : ''
                          }${options.maxFiles ? `UPTO ${options.maxFiles} FILES` : ''})`
                        : ''}
                    </Typography>
                  </div>
                </div>
                <input
                  id="dropzone-file"
                  className="!block absolute top-0 left-0 opacity-0 -z-10"
                  type="file"
                  required={required}
                  {...getInputProps({
                    onClick: (e) => {
                      e.currentTarget.value = '';
                    },
                  })}
                />
              </Box>
            )}
          </Dropzone>
          <aside className="flex flex-wrap gap-2">
            {(value as UploadFile[]).map((file) => (
              <div key={file.name} className="relative flex flex-col gap-1 w-24">
                <picture className="grow border rounded p-1 max-h-24">
                  <source srcSet={file.preview} type={file.type} />
                  <img
                    className="object-cover w-full h-full"
                    src={file.preview}
                    alt={`Preview of ${file.name}`}
                    onLoad={() => {
                      // Revoke data uri after image is loaded
                      URL.revokeObjectURL(file.preview);
                    }}
                  />
                </picture>
                <div className="h-12 overflow-hidden">
                  <Typography
                    className="leading-4"
                    variant="caption"
                    sx={{
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      display: '-webkit-box',
                      WebkitLineClamp: '2',
                      WebkitBoxOrient: 'vertical',
                    }}
                  >
                    {file.name}
                  </Typography>
                  <Typography className="truncate" variant="caption" color="text.secondary">
                    {formatBytes(file.size, 2)}
                  </Typography>
                </div>
                <IconButton
                  aria-label="close"
                  className="absolute top-1.5 right-1.5 text-white drop-shadow-md bg-black/30 hover:bg-black/40 backdrop-blur-sm"
                  size="small"
                  color="inherit"
                  onClick={() => onChange(handleRemoveFile(file.name))}
                >
                  <Close className="text-sm" fontSize="small" />
                </IconButton>
              </div>
            ))}
          </aside>
          <FormHelperText className="-translate-y-1" error>
            {errors[name]?.message}
          </FormHelperText>
        </div>
      )}
    />
  );
};

export default FileUpload;
