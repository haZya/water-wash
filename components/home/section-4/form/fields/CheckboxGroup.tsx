import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import clsx from 'clsx';
import { ICheckboxGroup } from 'models/shared';
import { Controller, useFormContext } from 'react-hook-form';
import { IForm } from '../Form';

const CheckboxGroup = ({ type, name, label, options, required, width }: ICheckboxGroup) => {
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
        <FormGroup
          aria-label={label}
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
          {options?.map((o) => (
            <FormControlLabel
              key={o.name}
              {...field}
              control={<Checkbox required={required && !field.value} color="primary" />}
              name={name}
              label={
                <Typography
                  sx={{
                    textShadow: `0px 0px 30px ${theme.palette.primary[700]}`,
                  }}
                >
                  {o.label}
                </Typography>
              }
            />
          ))}
          <FormHelperText>{errors.name?.message}</FormHelperText>
        </FormGroup>
      )}
    />
  );
};

export default CheckboxGroup;
