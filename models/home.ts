import { IPage } from './shared';

//#region Hero
export interface IAnimatedItem {
  index: number;
  lottie: string | object;
  icon: string;
  title: string;
  description?: string;
  color: string;
}

export interface IHome extends IPage {
  hero: {
    items: Omit<IAnimatedItem, 'index'>[];
  };
}
//#endregion
