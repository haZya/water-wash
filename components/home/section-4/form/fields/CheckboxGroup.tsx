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
import { ICheckboxGroup, IForm } from 'models/shared';
import { Controller, useFormContext } from 'react-hook-form';

const CheckboxGroup = ({ name, label, options, required, width }: ICheckboxGroup) => {
  const theme = useTheme();
  const xsDown = useMediaQuery(theme.breakpoints.down('xs'));
  const {
    control,
    getValues,
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
              control={
                <Checkbox
                  required={required && !field.value}
                  color="primary"
                  sx={{
                    color: theme.palette.primary[200],
                  }}
                />
              }
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
              value={field.value ?? []}
              checked={(field.value as string[])?.includes(o.name) ?? false}
              onChange={(e, c) => {
                const currentValues = (getValues(name) ?? []) as string[];
                const newValues = c
                  ? [...currentValues, o.name]
                  : currentValues.filter((v) => v !== o.name);
                field.onChange([...newValues]);
              }}
            />
          ))}
          <FormHelperText error>{errors[name]?.message}</FormHelperText>
        </FormGroup>
      )}
    />
  );
};

export default CheckboxGroup;
