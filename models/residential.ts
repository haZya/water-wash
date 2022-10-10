import { FileResponse, IFile, IImage, ImageResponse, IPage, SeoResponse } from './shared';

//#region Specialization Section
export interface ISpecializationSectionItem {
  icon: IImage;
  title: string;
}
//#endregion

//#region Plan Section
export interface IPlanSectionItem {
  tag: string;
  title: string;
  bullets: string[];
}
//#endregion

//#region Service Section
export interface IServiceSectionItem {
  title: string;
  content: string;
  bullets: string[];
  backgroundImage: IImage;
}
//#endregion

export interface IResidential extends IPage {
  bannerSection: {
    lottie: IFile;
  };
  specializeSection: {
    title: string;
    specializations: ISpecializationSectionItem[];
  };
  quoteSection: {
    title: string;
    content: string;
    buttons: {
      label: string;
      url: string;
      color: 'primary' | 'secondary';
    }[];
    backgroundImage: IImage;
  };
  planSection: {
    title: string;
    plans: IPlanSectionItem[];
  };
  serviceSection: {
    items: IServiceSectionItem[];
  };
  missionSection: {
    title: string;
    mission: {
      title: string;
      content: string;
    };
    content: {
      title: string;
      content: string;
      image: IImage;
      badge: IImage;
    };
  };
}

//#region Graphql
export interface ResidentialResponse {
  residentialPage: {
    data: {
      attributes: Omit<
        IResidential,
        | 'bannerSection'
        | 'specializeSection'
        | 'quoteSection'
        | 'planSection'
        | 'serviceSection'
        | 'missionSection'
        | 'seo'
      > & {
        bannerSection: Omit<IResidential['bannerSection'], 'lottie'> & {
          lottie: FileResponse;
        };
        specializeSection: Omit<IResidential['specializeSection'], 'specializations'> & {
          specializations: (Omit<ISpecializationSectionItem, 'icon'> & {
            icon: ImageResponse;
          })[];
        };
        quoteSection: Omit<IResidential['quoteSection'], 'backgroundImage'> & {
          backgroundImage: ImageResponse;
        };
        planSection: Omit<IResidential['planSection'], 'plans'> & {
          plans: (Omit<IPlanSectionItem, 'bullets'> & {
            bullets: {
              title: string;
            }[];
          })[];
        };
        serviceSection: Omit<IResidential['serviceSection'], 'items'> & {
          items: (Omit<IServiceSectionItem, 'bullets' | 'backgroundImage'> & {
            bullets: {
              title: string;
            }[];
            backgroundImage: ImageResponse;
          })[];
        };
        missionSection: Omit<IResidential['missionSection'], 'content'> & {
          content: Omit<IResidential['missionSection']['content'], 'image' | 'badge'> & {
            image: ImageResponse;
            badge: ImageResponse;
          };
        };
        seo: SeoResponse;
      };
    };
  };
}
//#endregion
