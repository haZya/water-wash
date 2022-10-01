import { FormFieldsResponse, IFormSection } from './form';
import { FileResponse, IFile, IImage, ImageResponse, IPage, SeoResponse } from './shared';

//#region Specialization Section
export interface ISpecializationSectionItem {
  icon: IImage;
  title: string;
}
//#endregion

export interface ICommercial extends IPage {
  bannerSection: {
    lottie: IFile;
  };
  specializeSection: {
    title: string;
    specializations: ISpecializationSectionItem[];
  };
  enquireSection: {
    title: string;
    content: string;
    buttons: {
      label: string;
      url: string;
      color: 'primary' | 'secondary';
    }[];
    backgroundImage: IImage;
  };
  formSection: {
    title: string;
    subtitle: string;
    form: {
      title: string;
      subtitle: string;
      sections: IFormSection[];
    };
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
export interface CommercialResponse {
  commercialPage: {
    data: {
      attributes: Omit<
        ICommercial,
        | 'bannerSection'
        | 'specializeSection'
        | 'enquireSection'
        | 'formSection'
        | 'missionSection'
        | 'seo'
      > & {
        bannerSection: Omit<ICommercial['bannerSection'], 'lottie'> & {
          lottie: FileResponse;
        };
        specializeSection: Omit<ICommercial['specializeSection'], 'specializations'> & {
          specializations: (Omit<ISpecializationSectionItem, 'icon'> & {
            icon: ImageResponse;
          })[];
        };
        enquireSection: Omit<ICommercial['enquireSection'], 'backgroundImage'> & {
          backgroundImage: ImageResponse;
        };
        formSection: Omit<ICommercial['formSection'], 'form'> & {
          form: Omit<ICommercial['formSection']['form'], 'sections'> & {
            sections: (Omit<IFormSection, 'fields'> & {
              fields: FormFieldsResponse;
            })[];
          };
        };
        missionSection: Omit<ICommercial['missionSection'], 'content'> & {
          content: Omit<ICommercial['missionSection']['content'], 'image' | 'badge'> & {
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
