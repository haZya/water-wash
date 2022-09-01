import { InputAdornment, TextField as MuiTextField, useMediaQuery, useTheme } from '@mui/material';
import clsx from 'clsx';
import { IForm, ITextArea, ITextField } from 'models/shared';
import { Controller, useFormContext } from 'react-hook-form';

const TextField = ({ type, name, label, required, width, rows }: ITextField & ITextArea) => {
  const theme = useTheme();
  const xsDown = useMediaQuery(theme.breakpoints.down('xs'));
  const {
    control,
    formState: { errors },
  } = useFormContext<IForm>();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <MuiTextField
          {...field}
          className={clsx(
            xsDown || width === 'full'
              ? 'col-span-12'
              : width === '2/3'
              ? 'col-span-8'
              : width === '1/2'
              ? 'col-span-6'
              : width === '1/3' && 'col-span-4',
            'brightness-105 bg-white/50 hover:bg-white shadow-lg shadow-primary-300/30 hover:shadow-primary-500/50 focus-within:!shadow-primary-500/70 transition duration-300'
          )}
          id={name}
          type={type}
          name={name}
          label={label}
          placeholder={!required ? '(optional)' : undefined}
          value={field.value ?? ''}
          required={required}
          size="small"
          variant="filled"
          color="primary"
          fullWidth={width === 'full'}
          multiline={type === 'textarea'}
          rows={rows}
          error={!!errors[name]}
          helperText={errors[name]?.message}
          InputProps={{
            disableUnderline: true,
            endAdornment: (
              <InputAdornment position="end">
                {/* <FontAwesomeIcon icon={faEnvelope} /> */}
              </InputAdornment>
            ),
          }}
          sx={{
            '& .Mui-focused': {
              backgroundColor: 'rgb(255 255 255 / 0.4)',
            },
            '& .Mui-focused .MuiInputAdornment-root svg': {
              color: (theme) => theme.palette.primary.main,
            },
          }}
        />
      )}
    />
  );
};

export default TextField;
