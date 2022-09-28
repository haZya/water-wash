import { gql } from 'graphql-request';
import { RequestDocument } from 'graphql-request/dist/types';
import { FormField, ImageFragment, SeoFragment } from 'graphql/fragments';
import { client } from 'lib/graphql-request';
import { ContactResponse, IContact } from 'models/contact';

const GET_PAGE: RequestDocument = gql`
  query GetPage {
    contactUsPage {
      data {
        attributes {
          title
          slug
          banner {
            ...ImageFragment
          }
          formSection {
            title
            subtitle
            form {
              fields {
                ...FormField
              }
            }
          }
          contactSection {
            title
            subtitle
            contactMethods {
              icon {
                ...ImageFragment
              }
              title
              content
              url
            }
          }
          mapSection {
            url
          }
          seo {
            ...SeoFragment
          }
        }
      }
    }
  }
  ${ImageFragment}
  ${FormField}
  ${SeoFragment}
`;

function format(attr: ContactResponse['contactUsPage']['data']['attributes']): IContact {
  return {
    ...attr,
    banner: { title: attr.title, backgroundImage: attr.banner.data.attributes },
    contactSection: {
      ...attr.contactSection,
      contactMethods: attr.contactSection.contactMethods.map((m) => ({
        ...m,
        icon: m.icon.data.attributes,
      })),
    },
    formSection: {
      ...attr.formSection,
      form: {
        ...attr.formSection.form,
        fields: attr.formSection.form.fields.data.map((f) => ({
          ...f.attributes.field,
          ...f.attributes.fieldType[0],
        })),
      },
    },
    seo: { ...attr.seo, metaImage: attr.seo.metaImage.data.attributes },
  };
}

async function getContactPage(): Promise<IContact> {
  const { contactUsPage } = await client.request<ContactResponse>(GET_PAGE);
  return format(contactUsPage.data.attributes);
}

export default getContactPage;
