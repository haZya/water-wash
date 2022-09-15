import { StaticImageData } from 'next/image';
import { ICheckboxGroup, IFileUpload, ITextArea, ITextField } from './shared';

//#region Specialization Section
export interface ISpecializationSectionItem {
  icon: string;
  title: string;
}
//#endregion

export interface ICommercial {
  bannerSection: {
    lottie: string;
  };
  specializationSection: {
    title: string;
    specializations: ISpecializationSectionItem[];
  };
  enquireSection: {
    title: string;
    content: string;
    background: StaticImageData | string;
  };
  formSection: {
    title: string;
    subtitle: string;
    form: {
      title: string;
      sections: {
        title: string;
        fields: (ITextField | ITextArea | ICheckboxGroup | IFileUpload)[];
      }[];
    };
  };
}
