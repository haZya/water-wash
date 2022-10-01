import { FormFieldsResponse, IFormSection } from './form';
import { FileResponse, IFile, IImage, ImageResponse, IPage, SeoResponse } from './shared';

//#region Hero
export interface IAnimatedItem {
  index: number;
  lottie: IFile;
  icon: IImage;
  title: string;
  description: string;
  color: string;
  path: string;
}
//#endregion

//#region Descriptive Section
export interface IDescriptiveSectionItem {
  icon: IImage;
  title: string;
  content: string;
}
//#endregion

//#region Gallery Section
export interface IGallerySectionItem {
  beforeImage: IImage;
  afterImage: IImage;
  portrait: boolean;
}
//#endregion

export interface IHome extends IPage {
  hero: {
    items: Omit<IAnimatedItem, 'index'>[];
    backgroundImage: IImage;
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
  descriptiveSection: {
    title: string;
    subtitle: string;
    items: IDescriptiveSectionItem[];
    backgroundImage: IImage;
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
  formSection: {
    title: string;
    subtitle: string;
    form: {
      title: string;
      sections: IFormSection[];
    };
    backgroundImage: IImage;
  };
}

//#region Graphql
export interface HomeResponse {
  homePage: {
    data: {
      attributes: Omit<
        IHome,
        'hero' | 'quoteSection' | 'descriptiveSection' | 'gallerySection' | 'formSection' | 'seo'
      > & {
        hero: Omit<IHome['hero'], 'items' | 'backgroundImage'> & {
          items: (Omit<IHome['hero']['items'][number], 'lottie' | 'icon'> & {
            lottie: FileResponse;
            icon: ImageResponse;
          })[];
          backgroundImage: ImageResponse;
        };
        quoteSection: Omit<IHome['quoteSection'], 'backgroundImage'> & {
          backgroundImage: ImageResponse;
        };
        descriptiveSection: Omit<IHome['descriptiveSection'], 'items' | 'backgroundImage'> & {
          items: (Omit<IDescriptiveSectionItem, 'icon'> & {
            icon: ImageResponse;
          })[];
          backgroundImage: ImageResponse;
        };
        gallerySection: Omit<IHome['gallerySection'], 'items'> & {
          items: (Omit<IGallerySectionItem, 'beforeImage' | 'afterImage'> & {
            beforeImage: ImageResponse;
            afterImage: ImageResponse;
          })[];
        };
        formSection: Omit<IHome['formSection'], 'form' | 'backgroundImage'> & {
          form: Omit<IHome['formSection']['form'], 'sections'> & {
            sections: (Omit<IFormSection, 'fields'> & {
              fields: FormFieldsResponse;
            })[];
          };
          backgroundImage: ImageResponse;
        };
        seo: SeoResponse;
      };
    };
  };
}
//#endregion
