import { gql } from 'graphql-request';

export const ImageFragment = gql`
  fragment ImageFragment on UploadFileEntityResponse {
    data {
      attributes {
        src: url
        alt: alternativeText
        width
        height
        blurDataURL: placeholder
      }
    }
  }
`;
