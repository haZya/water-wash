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
import { ICheckboxGroup, IForm, SelectOption } from 'models/shared';
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
      defaultValue={[]}
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
              className={clsx(
                'mr-auto backdrop-blur-sm bg-white/10 hover:bg-white/80 transition-colors duration-300 pr-2 my-1 ml-0',
                (field.value as SelectOption[])?.find((v) => v.name === o.name) && '!bg-white/80'
              )}
              name={name}
              control={
                <Checkbox
                  required={required && !(field.value as SelectOption[])?.length}
                  color="primary"
                  sx={{
                    color: theme.palette.primary[200],
                  }}
                />
              }
              label={
                <Typography
                  sx={{
                    textShadow: `0px 0px 30px ${theme.palette.primary[500]}`,
                  }}
                >
                  {o.label}
                </Typography>
              }
              onChange={(e, c) => {
                const currentValues = (getValues(name) ?? []) as SelectOption[];
                const newValues = c
                  ? [...currentValues, o]
                  : currentValues.filter((v) => v.name !== o.name);
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
