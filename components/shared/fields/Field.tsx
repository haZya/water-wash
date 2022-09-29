import {
  FormField,
  IAutoComplete,
  ICheckboxGroup,
  IFileUpload,
  ITextArea,
  ITextField,
} from 'models/form';
import { AutoComplete, CheckboxGroup, FileUpload, TextField } from '.';

const Field = (field: FormField) => {
  return (
    <>
      {field.type === 'ComponentFormText' ||
      field.type === 'ComponentFormEmail' ||
      field.type === 'ComponentFormTextArea' ? (
        <TextField {...(field as ITextField & ITextArea)} />
      ) : field.type === 'ComponentFormAutoComplete' ? (
        <AutoComplete {...(field as IAutoComplete)} />
      ) : field.type === 'ComponentFormCheckboxGroup' ? (
        <CheckboxGroup {...(field as ICheckboxGroup)} />
      ) : (
        field.type === 'ComponentFormFileUpload' && <FileUpload {...(field as IFileUpload)} />
      )}
    </>
  );
};

export default Field;
