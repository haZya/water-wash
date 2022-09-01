import bg from '@/assets/images/home/req-form-section/bg.png';

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
import styles from './ReqFormSection.module.css';

const ReqFormSection = () => {
  const {
    title,
    subtitle,
    background,
    form: { sections },
  } = useSelector(({ home }: RootState) => home.content.reqFormSection);
  const fields = sections.flatMap((s) => s.fields);

  /**
   * Form Validation Schema
   */
  const validationFields = fields.filter((f) => f.validationType);
  const schema = createYupSchema(validationFields);

  const formProps: UseFormProps<IForm> = {
    mode: 'onChange',
    defaultValues: Object.assign(
      {},
      ...fields.map((f) => ({ [f.name]: f.type === 'checkbox' ? [] : '' }))
    ),
    resolver: yupResolver(schema),
  };
  const methods = useForm<IForm>(formProps);

  return (
    <section
      aria-labelledby="req-form-section-title"
      className="relative overflow-hidden xs:min-h-[1400px]"
    >
      <Wave />
      <div className="w-full pb-16 bg-gradient-to-r from-primary-100 to-secondary-100">
        {bg && (
          <div className={clsx(styles.background)}>
            <Image src={bg} alt="" />
          </div>
        )}
        <div className="container mx-auto">
          <header className="flex flex-col items-center pt-8 space-y-4 md:space-y-8 mb-8 md:mb-16">
            <Typography
              className="text-3xl sm:text-4xl text-center font-bold leading-tight z-0"
              id="req-form-section-title"
              variant="h1"
              color="text.secondary"
            >
              <div dangerouslySetInnerHTML={{ __html: sanitize(title) }} />
            </Typography>
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

export default ReqFormSection;
