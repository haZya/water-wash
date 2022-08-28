import { InputAdornment, TextField as MuiTextField } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';
import { IForm } from '..';

const TextField = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext<IForm>();

  return (
    <Controller
      name="email"
      control={control}
      render={({ field }) => (
        <MuiTextField
          {...field}
          className="bg-white/30 shadow-lg shadow-primary-main/30 hover:shadow-primary-main/50 focus-within:!shadow-primary-main/70 duration-300 rounded-t-md"
          id="email"
          type="email"
          label="Field"
          required={true}
          size="small"
          variant="filled"
          color="primary"
          fullWidth={true}
          error={!!errors.email}
          helperText={errors?.email?.message}
          InputProps={{
            disableUnderline: true,
            endAdornment: (
              <InputAdornment position="end">
                {/* <FontAwesomeIcon icon={faEnvelope} /> */}
              </InputAdornment>
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
  );
};

export default TextField;
