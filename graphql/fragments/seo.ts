import { gql } from 'graphql-request';

export const SeoFragment = gql`
  fragment SeoFragment on ComponentSharedSeo {
    indexing
    metaTitle
    metaDescription
    metaImage {
      data {
        attributes {
          url
          alt: alternativeText
          width
          height
          placeholder
        }
      }
    }
  }
`;
