import { StaticImageData } from 'next/image';

//#region Hero
export interface IAnimatedItem {
  index: number;
  lottie: string | object;
  icon: string;
  title: string;
  description?: string;
  color: string;
}
//#endregion

//#region Section1
export interface ISection1Item {
  icon: string;
  title: string;
  content: string;
}
//#endregion

//#region Section2
export interface ISection2Item {
  image1: StaticImageData | string;
  image2: StaticImageData | string;
  portrait?: boolean;
  inView: boolean;
  animationStarted: boolean;
  animationEnded: boolean;
}
//#endregion

export interface IHome {
  hero: {
    items: Omit<IAnimatedItem, 'index'>[];
  };
  section1: {
    title: string;
    subtitle: string;
    background?: StaticImageData;
    items: ISection1Item[];
  };
  section2: {
    title: string;
    items: ISection2Item[];
  };
  section3: {
    title: string;
    script: {
      url: string;
      className: string;
    };
  };
  section4: {
    title: string;
    subtitle: string;
  };
}
