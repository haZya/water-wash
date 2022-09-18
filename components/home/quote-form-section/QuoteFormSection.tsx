import bg from '@/assets/images/home/quote-form-section/bg.jpg';

import { yupResolver } from '@hookform/resolvers/yup';
import { Typography } from '@mui/material';
import clsx from 'clsx';
import { Image } from 'components/shared';
import { sanitize } from 'lib/dompurify';
import { RootState } from 'lib/redux';
import { createYupSchema } from 'lib/yup';
import { IForm } from 'models/shared';
import { FormProvider, useForm, UseFormProps } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { Wave } from '.';
import { Form } from './form';
import styles from './QuoteFormSection.module.css';

const QuoteFormSection = () => {
  const {
    title,
    subtitle,
    background,
    form: { sections },
  } = useSelector(({ home }: RootState) => home.content.quoteFormSection);
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
    <section
      aria-labelledby="quote-form-section-title"
      className="relative overflow-hidden xs:min-h-[1400px] !pb-0"
    >
      <Wave />
      <div className="w-full pb-16 bg-gradient-to-r from-primary-100 to-secondary-100">
        {bg && <Image className={clsx(styles.background)} src={bg} alt="" />}
        <div className="container mx-auto pt-8">
          <header id="quote-form" className="flex flex-col items-center space-y-4 md:space-y-8">
            <Typography
              className="relative text-3xl xs:text-4xl sm:text-5xl text-center font-bold leading-tight z-0"
              id="quote-form-section-title"
              variant="h1"
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
      </div>
    </section>
  );
};

export default QuoteFormSection;
