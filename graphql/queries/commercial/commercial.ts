import { gql } from 'graphql-request';
import { RequestDocument } from 'graphql-request/dist/types';
import { FileFragment, FormField, ImageFragment, SeoFragment } from 'graphql/fragments';
import { client } from 'lib/graphql-request';
import { CommercialResponse, ICommercial } from 'models/commercial';

const GET_PAGE: RequestDocument = gql`
  query GetPage {
    commercialPage {
      data {
        attributes {
          title
          slug
          bannerSection {
            lottie {
              ...FileFragment
            }
          }
          specializeSection {
            title
            specializations {
              icon {
                ...ImageFragment
              }
              title
            }
          }
          enquireSection {
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
          formSection {
            title
            subtitle
            form {
              title
              subtitle
              sections {
                title
                componentName
                fields {
                  ...FormField
                }
              }
            }
          }
          missionSection {
            title
            mission {
              title
              content
            }
            content {
              title
              content
              image {
                ...ImageFragment
              }
              badge {
                ...ImageFragment
              }
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

function format(attr: CommercialResponse['commercialPage']['data']['attributes']): ICommercial {
  return {
    ...attr,
    bannerSection: {
      ...attr.bannerSection,
      lottie: { ...attr.bannerSection.lottie, src: attr.bannerSection.lottie.data.attributes.src },
    },
    specializeSection: {
      ...attr.specializeSection,
      specializations: attr.specializeSection.specializations.map((s) => ({
        ...s,
        icon: s.icon.data.attributes,
      })),
    },
    enquireSection: {
      ...attr.enquireSection,
      backgroundImage: attr.enquireSection.backgroundImage.data.attributes,
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
    },
    missionSection: {
      ...attr.missionSection,
      content: {
        ...attr.missionSection.content,
        image: attr.missionSection.content.image.data.attributes,
        badge: attr.missionSection.content.badge.data.attributes,
      },
    },
    seo: { ...attr.seo, metaImage: attr.seo.metaImage.data.attributes },
  };
}

async function getCommercialPage(): Promise<ICommercial> {
  const { commercialPage } = await client.request<CommercialResponse>(GET_PAGE);
  return format(commercialPage.data.attributes);
}

export default getCommercialPage;
