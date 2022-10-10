import { gql } from 'graphql-request';
import { RequestDocument } from 'graphql-request/dist/types';
import { FileFragment, ImageFragment, SeoFragment } from 'graphql/fragments';
import { client } from 'lib/graphql-request';
import { IResidential, ResidentialResponse } from 'models/residential';

const GET_PAGE: RequestDocument = gql`
  query GetPage {
    residentialPage {
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
          planSection {
            title
            plans {
              tag
              title
              bullets {
                title
              }
            }
          }
          serviceSection {
            items {
              title
              content
              bullets {
                title
              }
              backgroundImage {
                ...ImageFragment
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
  ${SeoFragment}
`;

function format(attr: ResidentialResponse['residentialPage']['data']['attributes']): IResidential {
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
    quoteSection: {
      ...attr.quoteSection,
      backgroundImage: attr.quoteSection.backgroundImage.data.attributes,
    },
    planSection: {
      ...attr.planSection,
      plans: attr.planSection.plans.map((p) => ({ ...p, bullets: p.bullets.map((b) => b.title) })),
    },
    serviceSection: {
      ...attr.serviceSection,
      items: attr.serviceSection.items.map((s) => ({
        ...s,
        bullets: s.bullets.map((b) => b.title),
        backgroundImage: s.backgroundImage.data.attributes,
      })),
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

async function getResidentialPage(): Promise<IResidential> {
  const { residentialPage } = await client.request<ResidentialResponse>(GET_PAGE);
  return format(residentialPage.data.attributes);
}

export default getResidentialPage;
