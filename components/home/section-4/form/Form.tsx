import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Divider, Typography } from '@mui/material';
import clsx from 'clsx';
import { showMessage } from 'components/shared/store/messageSlice';
import { useFormContext, UseFormProps } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import * as yup from 'yup';

export interface IForm {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

const initialForm: IForm = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
};

/**
 * Form Validation Schema
 */
const schema = yup
  .object()
  .shape({
    email: yup.string().email('Must be a valid email'),
    password: yup.string().min(8, 'Password must be at least 8 characters'),
  })
  .required();

export const formProps: UseFormProps<IForm> = {
  mode: 'onChange',
  defaultValues: initialForm,
  resolver: yupResolver(schema),
};

interface IProps {
  handleClose: () => void;
}

const Form = ({ handleClose }: IProps) => {
  const dispatch = useDispatch();
  const {
    reset,
    handleSubmit,
    formState: { isSubmitting },
  } = useFormContext<IForm>();

  const onSubmit = async ({ firstName, lastName, email, password }: IForm) => {
    try {
      //   await sendEmail(email);
      dispatch(
        showMessage({
          message: (
            <Typography variant="body2">
              Thank You! Your request has been submitted successfully. We will get back to you soon.
            </Typography>
          ),
          variant: 'success',
        })
      );
    } catch (error: any) {
      dispatch(showMessage({ message: error.message || error.code, variant: 'error' }));
    }
  };

  return (
    <form
      className="backdrop-blur backdrop-brightness-125 bg-white/50 rounded-3xl shadow-lg max-h-[90vh] overflow-auto p-6 sm:p-8 md:p-8 m-4 max-w-[520px]"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Typography className="text-center text-secondary-main text-3xl md:text-5xl" variant="h3">
        Sign Up
      </Typography>
      <Divider className="border-t-2 my-4 md:my-7" />
      <div className="flex flex-col items-center space-y-4 sm:space-y-6 md:space-y-8 max-w-96 md:max-w-[440px]">
        {/* <div className="flex w-full sm:w-[350px] sm:space-x-1 md:space-x-3">
          <Gender />
          <InterestedIn />
        </div>
        <div className="space-y-3 md:space-y-4">
          <FirstName />
          <LastName />
          <Email />
          <Password />
        </div> */}
      </div>
      <Button
        type="submit"
        className={clsx(
          'flex mx-auto !bg-red-500 text-white shadow-xl hover:shadow-xl shadow-red-500/40 hover:shadow-red-500/60 duration-300 rounded-full',
          'px-8 md:px-16 py-1.5 md:py-3 mt-4 sm:mt-6 md:mt-8'
        )}
        variant="contained"
        disabled={isSubmitting}
      >
        {isSubmitting && (
          <svg
            className="w-5 h-5 md:w-6 md:h-6 mr-3 -ml-1 text-primary-main animate-spin"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        <Typography className="text-lg md:text-2xl" variant="h5">
          Sign Up
        </Typography>
      </Button>
    </form>
  );
};

export default Form;
