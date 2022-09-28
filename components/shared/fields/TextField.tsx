import {
  BaseTextFieldProps,
  InputAdornment,
  TextField as MuiTextField,
  useMediaQuery,
  useTheme,
} from '@mui/material';
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
  const size: BaseTextFieldProps['size'] = 'small';

  return (
    <Controller
      name={name}
      control={control}
      defaultValue=""
      render={({ field }) => (
        <MuiTextField
          {...field}
          className={clsx(
            xsDown || width === 'full'
              ? 'col-span-12'
              : width === 'two_thirds'
              ? 'col-span-8'
              : width === 'half'
              ? 'col-span-6'
              : width === 'one_third' && 'col-span-4',
            'brightness-105 bg-white/50 hover:bg-white focus-within:bg-white shadow-lg shadow-primary-300/30 hover:shadow-primary-500/50 focus-within:!shadow-primary-500/70 transition duration-300'
          )}
          id={name}
          type={type === 'ComponentFormEmail' ? 'email' : 'text'}
          name={name}
          label={label}
          placeholder={!required ? '(optional)' : undefined}
          required={required}
          size={size}
          variant="filled"
          color="primary"
          fullWidth
          multiline={type === 'ComponentFormTextArea'}
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
            maxHeight: type !== 'ComponentFormTextArea' ? (size === 'small' ? 46 : 53) : undefined,
            mb: errors[name] && 3,
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
