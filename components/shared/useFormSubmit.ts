import { Variables } from 'graphql-request/dist/types';
import { upload } from 'graphql/mutations/upload';
import { IFileUpload, IForm, IFormSection, SelectOption } from 'models/shared';
import { UseFormReset } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { showMessage } from './store/messageSlice';

const useFormSubmit = () => {
  const dispatch = useDispatch();

  const onFormSubmit = async (
    sections: IFormSection[],
    form: IForm,
    create: (variables: Variables) => Promise<number>,
    reset: UseFormReset<IForm>
  ) => {
    const fileFields = sections.flatMap(
      (s) => s.fields.filter((f) => f.type === 'file') as IFileUpload[]
    );
    const files = fileFields.flatMap((f) => form[f.name] as File[]);

    try {
      const fileUploads = await upload({ files });
      const data = Object.assign(
        {},
        ...sections.map((s) => {
          const field = Object.assign(
            {},
            ...s.fields.map((f) => ({
              [f.name]:
                f.type === 'file'
                  ? (form[f.name] as File[]).flatMap((file) =>
                      fileUploads.filter((fu) => fu.name === file.name).map((u) => u.id)
                    )
                  : f.type === 'autocomplete' || f.type === 'checkbox'
                  ? (form[f.name] as SelectOption[]).map((o) => o.label).join(', ') || '-'
                  : form[f.name] || '-',
            }))
          );

          return s.componentName ? { [s.componentName]: field } : field;
        })
      );

      await create({ data });
      dispatch(
        showMessage({
          message:
            'Thank You! Your request has been submitted successfully. We will get back to you soon.',
          variant: 'success',
        })
      );

      reset();
    } catch (error: any) {
      dispatch(showMessage({ message: error.message || error.code, variant: 'error' }));
    }
  };

  return { onFormSubmit };
};

export default useFormSubmit;
