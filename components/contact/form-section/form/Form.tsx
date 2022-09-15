import { Divider, Typography } from '@mui/material';
import clsx from 'clsx';
import { AnimatedButton } from 'components/shared';
import { AutoComplete, CheckboxGroup, FileUpload, TextField } from 'components/shared/fields';
import { showMessage } from 'components/shared/store/messageSlice';
import { RootState } from 'lib/redux';
import {
  IAutoComplete,
  ICheckboxGroup,
  IFileUpload,
  IForm,
  ITextArea,
  ITextField,
} from 'models/shared';
import { Fragment } from 'react';
import { useFormContext } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

const Form = () => {
  const dispatch = useDispatch();
  const {
    title,
    form: { fields },
  } = useSelector(({ contact }: RootState) => contact.content.formSection);
  const {
    reset,
    handleSubmit,
    formState: { isSubmitting },
  } = useFormContext<IForm>();

  const onSubmit = async ({ firstName, lastName, email, phone, message }: IForm) => {
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

      reset();
    } catch (error: any) {
      dispatch(showMessage({ message: error.message || error.code, variant: 'error' }));
    }
  };

  return (
    <form
      id="contact-form"
      className="rounded-3xl overflow-auto w-full md:w-2/3"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Typography
        className="text-center text-secondary-main text-3xl xs:text-4xl sm:text-5xl font-bold leading-tight"
        variant="h2"
        color="text.secondary"
      >
        {title}
      </Typography>
      <Divider className="border-t-2 my-4 md:my-7" />
      <div className="flex flex-col items-center space-y-8 md:space-y-12 mt-8 md:mt-12">
        <div className="grid grid-cols-12 gap-6 w-full">
          {fields.map((f) => (
            <Fragment key={f.name}>
              {f.type === 'text' || f.type === 'email' || f.type === 'textarea' ? (
                <TextField {...(f as ITextField & ITextArea)} />
              ) : f.type === 'autocomplete' ? (
                <AutoComplete {...(f as IAutoComplete)} />
              ) : f.type === 'checkbox' ? (
                <CheckboxGroup {...(f as ICheckboxGroup)} />
              ) : (
                f.type === 'file' && <FileUpload {...(f as IFileUpload)} />
              )}
            </Fragment>
          ))}
        </div>
      </div>
      <AnimatedButton
        type="submit"
        className={clsx(
          'flex mx-auto !bg-secondary-500 text-white shadow-xl hover:shadow-xl shadow-secondary-500/40 hover:shadow-secondary-500/60 rounded-full',
          'px-8 md:px-16 py-1.5 md:py-3 mt-6 md:mt-14 mb-16'
        )}
        variant="contained"
        disabled={isSubmitting}
      >
        {isSubmitting && (
          <svg
            className="w-5 h-5 md:w-6 md:h-6 mr-3 -ml-1 text-primary-500 animate-spin"
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
        <Typography className="text-lg md:text-2xl">Submit</Typography>
      </AnimatedButton>
    </form>
  );
};

export default Form;
