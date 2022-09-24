import {
  IAutoComplete,
  ICheckboxGroup,
  IFileUpload,
  IFormField,
  ITextArea,
  ITextField,
} from 'models/shared';
import { AutoComplete, CheckboxGroup, FileUpload, TextField } from '.';

const Field = (field: IFormField) => {
  return (
    <>
      {field.type === 'text' || field.type === 'email' || field.type === 'textarea' ? (
        <TextField {...(field as ITextField & ITextArea)} />
      ) : field.type === 'autocomplete' ? (
        <AutoComplete {...(field as IAutoComplete)} />
      ) : field.type === 'checkbox' ? (
        <CheckboxGroup {...(field as ICheckboxGroup)} />
      ) : (
        field.type === 'file' && <FileUpload {...(field as IFileUpload)} />
      )}
    </>
  );
};

export default Field;
