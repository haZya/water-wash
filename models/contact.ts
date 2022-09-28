import {
  FormField,
  FormFieldsResponse,
  IBanner,
  IFormField,
  IImage,
  ImageResponse,
  IPage,
  SeoResponse,
} from './shared';

//#region Contact Section
export interface IContactSectionItem {
  icon: IImage;
  title: string;
  content: string;
  url: string;
}
//#endregion

export interface IContact extends IPage {
  banner: IBanner;
  formSection: {
    title: string;
    subtitle: string;
    form: {
      fields: (IFormField & FormField)[];
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

//#region Graphql
export interface ContactResponse {
  contactUsPage: {
    data: {
      attributes: Omit<IContact, 'banner' | 'formSection' | 'contactSection' | 'seo'> & {
        banner: ImageResponse;
        formSection: Omit<IContact['formSection'], 'form'> & {
          form: Omit<IContact['formSection']['form'], 'fields'> & {
            fields: FormFieldsResponse;
          };
        };
        contactSection: Omit<IContact['contactSection'], 'contactMethods'> & {
          contactMethods: (Omit<IContactSectionItem, 'icon'> & {
            icon: ImageResponse;
          })[];
        };
        seo: SeoResponse;
      };
    };
  };
}
//#endregion
