import { gql } from 'graphql-request';

export const FileFragment = gql`
  fragment FileFragment on UploadFileEntityResponse {
    data {
      attributes {
        src: url
      }
    }
  }
`;
