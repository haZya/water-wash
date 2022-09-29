import { DropzoneOptions } from 'react-dropzone';

export interface IFormSection {
  title: string;
  componentName?: string;
  fields: (ITextField | ITextArea | ICheckboxGroup | IFileUpload)[];
}

export interface SelectOption {
  name: string;
  label: string;
}

export interface IFormField {
  name: string;
  label: string;
  required: boolean;
  width: 'full' | 'two_thirds' | 'half' | 'one_third';
  validationType?: string;
  validationTypeError?: string;
  validations?: { type: string; params: any[] }[];
}

type FieldType = {
  type:
    | 'ComponentFormText'
    | 'ComponentFormEmail'
    | 'ComponentFormTextArea'
    | 'ComponentFormAutoComplete'
    | 'ComponentFormCheckboxGroup'
    | 'ComponentFormFileUpload';
};

interface TextFieldType extends FieldType {}
export interface ITextField extends IFormField, TextFieldType {}

interface TextAreaType extends FieldType {
  rows: number;
}
export interface ITextArea extends IFormField, TextAreaType {}

interface AutoCompleteType extends FieldType {
  multiple: boolean;
  options: SelectOption[] | null;
}
export interface IAutoComplete extends IFormField, AutoCompleteType {}

interface CheckboxGroupType extends FieldType {
  options: SelectOption[];
}
export interface ICheckboxGroup extends IFormField, FieldType {}

interface FileUploadType extends FieldType {
  options: DropzoneOptions;
}
export interface IFileUpload extends IFormField, FileUploadType {}

type FormFieldType =
  | TextFieldType
  | TextAreaType
  | AutoCompleteType
  | CheckboxGroupType
  | FileUploadType;

export type FormField = ITextField | ITextArea | IAutoComplete | ICheckboxGroup | IFileUpload;

export interface IForm {
  [x: string]: string | string[] | File[] | IAutoComplete['options'];
}

//#region Graphql
export type FormFieldsResponse = {
  data: {
    attributes: {
      field: Omit<IFormField, 'type'>;
      fieldType: FormFieldType[];
    };
  }[];
};

//#endregion
