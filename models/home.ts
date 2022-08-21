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

export interface IHome {
  hero: {
    items: Omit<IAnimatedItem, 'index'>[];
  };
  section1: {
    title: string;
    subtitle: string;
    items: ISection1Item[];
  };
}
