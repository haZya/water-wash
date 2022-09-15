import { yupResolver } from '@hookform/resolvers/yup';
import { Typography } from '@mui/material';
import { sanitize } from 'lib/dompurify';
import { RootState } from 'lib/redux';
import { createYupSchema } from 'lib/yup';
import { IForm } from 'models/shared';
import { FormProvider, useForm, UseFormProps } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { Form } from './form';

const CommercialFormSection = () => {
  const {
    title,
    subtitle,
    form: { sections },
  } = useSelector(({ commercial }: RootState) => commercial.content.formSection);
  const fields = sections.flatMap((s) => s.fields);

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
    <section aria-labelledby="commercial-form-section-title" className="relative overflow-hidden">
      <div className="container mx-auto py-8 mt-16">
        <header className="flex flex-col items-center space-y-4 md:space-y-8 mb-8 md:mb-16">
          <Typography
            className="relative text-3xl xs:text-4xl sm:text-5xl text-center font-bold leading-tight z-0"
            id="commercial-form-section-title"
            variant="h2"
            color="text.secondary"
            dangerouslySetInnerHTML={{ __html: sanitize(title) }}
          />
          <Typography
            className="text-center text-base my-6 z-0"
            dangerouslySetInnerHTML={{ __html: sanitize(subtitle) }}
          />
        </header>
        <FormProvider {...methods}>
          <Form />
        </FormProvider>
      </div>
    </section>
  );
};

export default CommercialFormSection;
