import { StaticImageData } from 'next/image';

//#region Value Section
export interface IValueSectionItem {
  badge: StaticImageData | string;
  title: string;
  content: string;
}
//#endregion

export interface IAbout {
  valueSection: {
    items: IValueSectionItem[];
  };
}
