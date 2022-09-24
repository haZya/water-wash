import {
  Autocomplete,
  FilledTextFieldProps,
  FormHelperText,
  TextField,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import clsx from 'clsx';
import { IAutoComplete, IForm, SelectOption } from 'models/shared';
import { useState } from 'react';
import { Controller, useFormContext } from 'react-hook-form';

const AutoComplete = ({ name, label, required, width, multiple, options }: IAutoComplete) => {
  const theme = useTheme();
  const xsDown = useMediaQuery(theme.breakpoints.down('xs'));
  const {
    control,
    formState: { errors },
  } = useFormContext<IForm>();

  const [open, setOpen] = useState(false);
  const variant: FilledTextFieldProps['variant'] = 'filled';

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={multiple ? [] : null}
      render={({ field, field: { value, onChange } }) => (
        <div
          className={clsx(
            xsDown || width === 'full'
              ? 'col-span-12'
              : width === '2/3'
              ? 'col-span-8'
              : width === '1/2'
              ? 'col-span-6'
              : width === '1/3' && 'col-span-4'
          )}
        >
          <Autocomplete
            {...field}
            className="brightness-105 bg-white/50 hover:bg-white focus-within:bg-white shadow-lg shadow-primary-300/30 hover:shadow-primary-500/50 focus-within:!shadow-primary-500/70 transition duration-300"
            multiple={multiple}
            disableCloseOnSelect={multiple}
            limitTags={2}
            open={open}
            onOpen={() => {
              setOpen(true);
            }}
            onClose={() => {
              setOpen(false);
            }}
            isOptionEqualToValue={(option, val) => option.name === val.name}
            options={options ?? []}
            getOptionLabel={(option) => option.label}
            value={value as SelectOption[]}
            onChange={(_event, val) => {
              onChange(val ?? null);
            }}
            ChipProps={{
              size: 'small',
              sx: { my: '0.5px !important', mx: '1.5px !important', height: 20 },
            }}
            componentsProps={{
              paper: {
                className: 'shadow-lg shadow-primary-300/30 rounded-none rounded-b-sm',
              },
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                name={name}
                label={label}
                placeholder={
                  !options?.length
                    ? `Select ${label}`
                    : `From ${options?.length} ${
                        options?.length === 1 ? 'option...' : 'options...'
                      }` + (!required ? ' (optional)' : '')
                }
                required={!(value as SelectOption[]).length && required}
                type="text"
                size="small"
                variant={variant}
                color="primary"
                fullWidth
                error={!!errors[name]}
                InputProps={{
                  ...params.InputProps,
                  disableUnderline: true,
                  startAdornment: (
                    <>
                      {/* <InputAdornment position="end">
                        <Icon className="text-20" color="action">
                      person
                    </Icon>
                      </InputAdornment> */}
                      {params.InputProps.startAdornment}
                    </>
                  ),
                }}
                sx={{
                  '& .Mui-focused .MuiInputAdornment-root svg': {
                    color: (theme) => theme.palette.primary.main,
                  },
                }}
              />
            )}
          />
          <FormHelperText error variant={variant}>
            {errors[name]?.message}
          </FormHelperText>
        </div>
      )}
    />
  );
};

export default AutoComplete;
