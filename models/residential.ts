import { StaticImageData } from 'next/image';

//#region Specialization Section
export interface ISpecializationSectionItem {
  icon: string;
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
  background: StaticImageData | string;
}
//#endregion

export interface IResidential {
  bannerSection: {
    lottie: string;
  };
  specializationSection: {
    title: string;
    specializations: ISpecializationSectionItem[];
  };
  quoteSection: {
    title: string;
    content: string;
    background: StaticImageData | string;
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
