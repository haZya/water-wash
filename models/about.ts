import { IBanner, IImage, ImageResponse, IPage, SeoResponse } from './shared';

//#region Value Section
export interface IValueSectionItem {
  image: IImage;
  bgColor: string;
  title: string;
  content: string;
}
//#endregion

export interface IAbout extends IPage {
  title: string;
  slug: string;
  banner: IBanner;
  missionSection: {
    title: string;
    content: string;
    image: IImage;
  };
  valueSection: {
    items: IValueSectionItem[];
  };
}

//#region Graphql
export interface AboutResponse {
  aboutUsPage: {
    data: {
      attributes: Omit<IAbout, 'banner' | 'missionSection' | 'valueSection' | 'seo'> & {
        banner: ImageResponse;
        missionSection: Omit<IAbout['missionSection'], 'image'> & {
          image: ImageResponse;
        };
        valueSection: {
          items: (Omit<IValueSectionItem, 'image'> & {
            image: ImageResponse;
          })[];
        };
        seo: SeoResponse;
      };
    };
  };
}
//#endregion
