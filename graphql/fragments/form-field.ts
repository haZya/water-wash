import { gql } from 'graphql-request';

export const FormField = gql`
  fragment FormField on FormFieldRelationResponseCollection {
    data {
      attributes {
        field {
          name
          label
          required
          width
          validationType
          validationTypeError
          validations {
            type
            params
          }
        }
        fieldType {
          ... on ComponentFormText {
            type: __typename
          }
          ... on ComponentFormEmail {
            type: __typename
          }
          ... on ComponentFormTextArea {
            type: __typename
            rows
          }
          ... on ComponentFormAutoComplete {
            type: __typename
            multiple
            autoCompleteOptions: options {
              name
              label
            }
          }
          ... on ComponentFormCheckboxGroup {
            type: __typename
            checkboxGroupOptions: options {
              name
              label
            }
          }
          ... on ComponentFormFileUpload {
            type: __typename
            fileUploadOptions: options {
              accept
              multiple
              minSize
              maxSize
              maxFiles
            }
          }
        }
      }
    }
  }
`;
