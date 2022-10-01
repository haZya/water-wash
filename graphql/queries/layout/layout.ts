import { gql } from 'graphql-request';
import { RequestDocument } from 'graphql-request/dist/types';
import { ImageFragment, NavLinkFragment } from 'graphql/fragments';
import { client } from 'lib/graphql-request';
import { ILayout, LayoutResponse } from 'models/shared';

const GET_LAYOUT: RequestDocument = gql`
  query GetLayout {
    layout {
      data {
        attributes {
          logo {
            ...ImageFragment
          }
          socials {
            title
            icon {
              ...ImageFragment
            }
            url
          }
          contactDial {
            icon {
              ...ImageFragment
            }
            color
            actions {
              title
              url
              icon {
                ...ImageFragment
              }
            }
          }
          navTop {
            contactMethods {
              title
              icon {
                ...ImageFragment
              }
              content
              url
            }
            links {
              ...NavLinkFragment
            }
          }
          nav {
            links {
              ...NavLinkFragment
            }
            mobileLinks {
              ...NavLinkFragment
            }
          }
          footer {
            copyrightText
          }
        }
      }
    }
  }
  ${ImageFragment}
  ${NavLinkFragment}
`;

function format(attr: LayoutResponse['layout']['data']['attributes']): ILayout {
  return {
    ...attr,
    logo: attr.logo.data.attributes,
    socials: attr.socials.map((s) => ({ ...s, icon: s.icon.data.attributes })),
    contactDial: {
      ...attr.contactDial,
      icon: attr.contactDial.icon.data.attributes,
      actions: attr.contactDial.actions.map((a) => ({ ...a, icon: a.icon.data.attributes })),
    },
    navTop: {
      ...attr.navTop,
      contactMethods: attr.navTop.contactMethods.map((c) => ({
        ...c,
        icon: c.icon.data.attributes,
      })),
    },
  };
}

async function getLayout(): Promise<ILayout> {
  const { layout } = await client.request<LayoutResponse>(GET_LAYOUT);
  return format(layout.data.attributes);
}

export default getLayout;
