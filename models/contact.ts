import { ICheckboxGroup, ITextArea, ITextField } from './shared';

//#region Contact Section
export interface IContactSectionItem {
  icon: string;
  title: string;
  content: string;
  url: string;
}
//#endregion

export interface IContact {
  formSection: {
    title: string;
    subtitle: string;
    form: {
      fields: (ITextField | ITextArea | ICheckboxGroup)[];
    };
  };
  contactSection: {
    title: string;
    subtitle: string;
    contactMethods: IContactSectionItem[];
  };
  mapSection: {
    url: string;
  };
}
