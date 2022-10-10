import { yupResolver } from '@hookform/resolvers/yup';
import { RootState } from 'lib/redux';
import { createYupSchema } from 'lib/yup';
import { IForm } from 'models/form';
import { FormProvider, useForm, UseFormProps } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { Form } from './form';

const ContactFormSection = () => {
  const {
    form: { fields },
  } = useSelector(({ contact }: RootState) => contact.content.formSection);

  /**
   * Form Validation Schema
   */
  const validationFields = fields.filter((f) => f.validationType);
  const schema = createYupSchema(validationFields);

  const formProps: UseFormProps<IForm> = {
    mode: 'onChange',
    resolver: yupResolver(schema),
  };
  const methods = useForm<IForm>(formProps);

  return (
    <FormProvider {...methods}>
      <Form />
    </FormProvider>
  );
};

export default ContactFormSection;
