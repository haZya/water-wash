import { DropzoneOptions } from 'react-dropzone';

//#region Common
export interface IImage {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  blurDataURL?: string;
}
//#endregion

// #region Layout
export type NavLink = {
  title: string;
  url: string;
  color: 'primary' | 'secondary' | 'text';
  type: 'text' | 'outlined';
};

export type Social = {
  title: string;
  url: string;
  icon: IImage;
};

export type ContactAction = {
  title: string;
  url: string;
  icon: IImage;
};

export interface ILayout {
  logo: IImage;
  socials: Social[];
  contactDial: {
    icon: IImage;
    color: 'primary' | 'secondary';
    actions: ContactAction[];
  };
  navTop: {
    contactMethods: {
      title: string;
      icon: IImage;
      content: string;
      url: string;
    }[];
    links: NavLink[];
  };
  nav: {
    links: NavLink[];
  };
  footer: {
    copyrightText: string;
  };
}

export interface ISeo {
  /**
   * Should the page be indexed?
   *
   * Initial value: `false`
   */
  indexing?: boolean;
  /**
   * Meta Title
   *
   * Initial value: `Component.name`
   */
  metaTitle?: string;
  /**
   * Meta Description
   *
   * Initial value: `undefined`
   */
  metaDescription?: string;
  /**
   * Open Graph image
   *
   * Initial value: `undefined`
   */
  metaImage?: IImage;
}

export interface IBanner {
  title: string;
  backgroundImage: IImage;
}

export interface IPage {
  banner?: IBanner;
  seo: ISeo;
}
//#endregion

//#region Form
export interface IFormSection {
  title: string;
  componentName?: string;
  fields: (ITextField | ITextArea | ICheckboxGroup | IFileUpload)[];
}

export interface SelectOption {
  name: string;
  label: string;
}

export interface IFormField {
  type: 'text' | 'email' | 'textarea' | 'autocomplete' | 'checkbox' | 'file';
  name: string;
  label: string;
  required: boolean;
  width: 'full' | '2/3' | '1/2' | '1/3';
  validationType?: string;
  validations?: { type: string; params: any[] }[];
  validationTypeError?: string;
}

export interface ITextField extends IFormField {}

export interface ITextArea extends IFormField {
  rows: number;
}

export interface IAutoComplete extends IFormField {
  multiple: boolean;
  options: SelectOption[] | null;
}

export interface ICheckboxGroup extends IFormField {
  options: SelectOption[];
}

export interface IFileUpload extends IFormField {
  options: DropzoneOptions;
}

export interface IForm {
  [x: string]: string | string[] | File[] | IAutoComplete['options'];
}
//#endregion

//#region Graphql
export type ImageResponse = {
  data: {
    attributes: IImage;
  };
};

export type SeoResponse = Omit<ISeo, 'metaImage'> & {
  metaImage: ImageResponse;
};

export type LayoutResponse = {
  layout: {
    data: {
      attributes: Omit<ILayout, 'logo' | 'socials' | 'contactDial' | 'navTop'> & {
        logo: ImageResponse;
        socials: (Omit<Social, 'icon'> & {
          icon: ImageResponse;
        })[];
        contactDial: Omit<ILayout['contactDial'], 'icon' | 'actions'> & {
          icon: ImageResponse;
          actions: (Omit<ContactAction, 'icon'> & {
            icon: ImageResponse;
          })[];
        };
        navTop: Omit<ILayout['navTop'], 'contactMethods'> & {
          contactMethods: (Omit<ILayout['navTop']['contactMethods'][number], 'icon'> & {
            icon: ImageResponse;
          })[];
        };
      };
    };
  };
};
//#endregion
