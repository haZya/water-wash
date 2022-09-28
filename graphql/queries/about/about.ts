import { gql } from 'graphql-request';
import { RequestDocument } from 'graphql-request/dist/types';
import { ImageFragment, SeoFragment } from 'graphql/fragments';
import { client } from 'lib/graphql-request';
import { AboutResponse, IAbout } from 'models/about';

const GET_PAGE: RequestDocument = gql`
  query GetPage {
    aboutUsPage {
      data {
        attributes {
          title
          slug
          banner {
            ...ImageFragment
          }
          missionSection {
            title
            content
            image {
              ...ImageFragment
            }
          }
          valueSection {
            items {
              image {
                ...ImageFragment
              }
              bgColor
              title
              content
            }
          }
          seo {
            ...SeoFragment
          }
        }
      }
    }
  }
  ${ImageFragment}
  ${SeoFragment}
`;

function format(attr: AboutResponse['aboutUsPage']['data']['attributes']): IAbout {
  return {
    ...attr,
    banner: { title: attr.title, backgroundImage: attr.banner.data.attributes },
    missionSection: { ...attr.missionSection, image: attr.missionSection.image.data.attributes },
    valueSection: {
      items: attr.valueSection.items.map((v) => ({ ...v, image: v.image.data.attributes })),
    },
    seo: { ...attr.seo, metaImage: attr.seo.metaImage.data.attributes },
  };
}

async function getAboutPage(): Promise<IAbout> {
  const { aboutUsPage } = await client.request<AboutResponse>(GET_PAGE);
  return format(aboutUsPage.data.attributes);
}

export default getAboutPage;
