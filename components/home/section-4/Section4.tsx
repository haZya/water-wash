import { yupResolver } from '@hookform/resolvers/yup';
import { Typography } from '@mui/material';
import { sanitize } from 'lib/dompurify';
import { RootState } from 'lib/redux';
import { createYupSchema } from 'lib/yup';
import { FormProvider, useForm, UseFormProps } from 'react-hook-form';
import { useSelector } from 'react-redux';
import * as yup from 'yup';
import { Form, IForm } from './form';

const Section4 = () => {
  const {
    title,
    subtitle,
    form: { sections },
  } = useSelector(({ home }: RootState) => home.content.section4);
  const fields = sections.flatMap((s) => s.fields);
  const schemaShape = fields.filter((f) => f.validationType).reduce(createYupSchema, {});

  /**
   * Form Validation Schema
   */
  const schema = yup.object().shape(schemaShape).required();

  const formProps: UseFormProps<IForm> = {
    mode: 'onChange',
    resolver: yupResolver(schema),
  };
  const methods = useForm<IForm>(formProps);

  return (
    <section aria-labelledby="section-4-title">
      <div className="container mx-auto pt-16">
        <header className="flex flex-col items-center space-y-8 mb-16">
          <Typography
            className="text-3xl sm:text-4xl text-center font-bold leading-tight"
            id="section-4-title"
            variant="h1"
            color="text.secondary"
          >
            <div dangerouslySetInnerHTML={{ __html: sanitize(title) }} />
          </Typography>
          <Typography
            className="text-center text-base my-6"
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

export default Section4;
