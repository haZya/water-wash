import { gql } from 'graphql-request';
import { RequestDocument } from 'graphql-request/dist/types';
import { FileFragment, FormField, ImageFragment, SeoFragment } from 'graphql/fragments';
import { client } from 'lib/graphql-request';
import { HomeResponse, IHome } from 'models/home';

const GET_PAGE: RequestDocument = gql`
  query GetPage {
    homePage {
      data {
        attributes {
          title
          slug
          hero {
            items {
              lottie {
                ...FileFragment
              }
              icon {
                ...ImageFragment
              }
              title
              description
              color
              path
            }
            backgroundImage {
              ...ImageFragment
            }
          }
          quoteSection {
            title
            content
            buttons {
              label
              url
              color
            }
            backgroundImage {
              ...ImageFragment
            }
          }
          descriptiveSection {
            title
            subtitle
            items {
              icon {
                ...ImageFragment
              }
              title
              content
            }
            backgroundImage {
              ...ImageFragment
            }
          }
          gallerySection {
            title
            items {
              beforeImage {
                ...ImageFragment
              }
              afterImage {
                ...ImageFragment
              }
              portrait
            }
          }
          reviewSection {
            title
            script {
              url
              className
            }
          }
          formSection {
            title
            subtitle
            form {
              title
              sections {
                title
                componentName
                fields {
                  ...FormField
                }
              }
            }
            backgroundImage {
              ...ImageFragment
            }
          }
          seo {
            ...SeoFragment
          }
        }
      }
    }
  }
  ${FileFragment}
  ${ImageFragment}
  ${FormField}
  ${SeoFragment}
`;

function format(attr: HomeResponse['homePage']['data']['attributes']): IHome {
  return {
    ...attr,
    hero: {
      ...attr.hero,
      items: attr.hero.items.map((item) => ({
        ...item,
        lottie: { ...item.lottie, src: item.lottie.data.attributes.src },
        icon: item.icon.data.attributes,
      })),
      backgroundImage: attr.hero.backgroundImage.data.attributes,
    },
    quoteSection: {
      ...attr.quoteSection,
      backgroundImage: attr.quoteSection.backgroundImage.data.attributes,
    },
    descriptiveSection: {
      ...attr.descriptiveSection,
      items: attr.descriptiveSection.items.map((item) => ({
        ...item,
        icon: item.icon.data.attributes,
      })),
      backgroundImage: attr.descriptiveSection.backgroundImage.data.attributes,
    },
    gallerySection: {
      ...attr.gallerySection,
      items: attr.gallerySection.items.map((item) => ({
        ...item,
        beforeImage: item.beforeImage.data.attributes,
        afterImage: item.afterImage.data.attributes,
      })),
    },
    formSection: {
      ...attr.formSection,
      form: {
        ...attr.formSection.form,
        sections: attr.formSection.form.sections.map((s) => ({
          ...s,
          fields: s.fields.data.map((f) => ({
            ...f.attributes.field,
            ...f.attributes.fieldType[0],
          })),
        })),
      },
      backgroundImage: attr.formSection.backgroundImage.data.attributes,
    },
    seo: { ...attr.seo, metaImage: attr.seo.metaImage.data.attributes },
  };
}

async function getHomePage(): Promise<IHome> {
  const { homePage } = await client.request<HomeResponse>(GET_PAGE);
  return format(homePage.data.attributes);
}

export default getHomePage;
