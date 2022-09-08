import { StaticImageData } from 'next/image';

//#region Value Section
export interface IValueSectionItem {
  badge: StaticImageData | string;
  title: string;
  content: string;
  color: string;
}
//#endregion

export interface IAbout {
  missionSection: {
    title: string;
    content: string;
    badge: StaticImageData | string;
  };
  valueSection: {
    items: IValueSectionItem[];
  };
}
