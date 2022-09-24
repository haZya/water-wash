import { StaticImageData } from 'next/image';
import { IFormSection } from './shared';

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
      sections: IFormSection[];
    };
  };
  missionSection: {
    title: string;
    mission: {
      title: string;
      subtitle: string;
    };
    content: {
      title: string;
      content: string;
      image: StaticImageData | string;
      badge: StaticImageData | string;
    };
  };
}
