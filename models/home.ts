import { StaticImageData } from 'next/image';
import { ICheckboxGroup, ITextArea, ITextField } from './shared';

//#region Hero
export interface IAnimatedItem {
  index: number;
  lottie: string;
  icon: string;
  title: string;
  description?: string;
  color: string;
  path: string;
}
//#endregion

//#region Descriptive Section
export interface IDescriptiveSectionItem {
  icon: string;
  title: string;
  content: string;
}
//#endregion

//#region Gallery Section
export interface IGallerySectionItem {
  before: StaticImageData | string;
  after: StaticImageData | string;
  portrait?: boolean;
}
//#endregion

export interface IHome {
  hero: {
    items: Omit<IAnimatedItem, 'index'>[];
  };
  descriptiveSection: {
    title: string;
    subtitle: string;
    background?: StaticImageData;
    items: IDescriptiveSectionItem[];
  };
  gallerySection: {
    title: string;
    items: IGallerySectionItem[];
  };
  reviewSection: {
    title: string;
    script: {
      url: string;
      className: string;
    };
  };
  quoteFormSection: {
    title: string;
    subtitle: string;
    background?: StaticImageData;
    form: {
      title: string;
      sections: {
        title: string;
        fields: (ITextField | ITextArea | ICheckboxGroup)[];
      }[];
    };
  };
}
