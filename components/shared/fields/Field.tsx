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
