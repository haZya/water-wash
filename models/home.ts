//#region Hero
export interface IAnimatedItem {
  index: number;
  lottie: string | object;
  icon: string;
  title: string;
  description?: string;
  color: string;
}

export interface IHero {
  logo: string;
  items: Omit<IAnimatedItem, 'index'>[];
}
//#endregion
