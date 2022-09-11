import { StaticImageData } from 'next/image';

export type NavLink = {
  label: string;
  path: string;
  color: 'primary' | 'secondary' | 'text';
  type: 'text' | 'outlined';
};

export type Social = {
  label: string;
  icon: string;
  url: string;
};

export interface ILayout {
  logo: any;
  navTop: {
    phone: {
      title: string;
      content: string;
      icon: string;
    };
    email: {
      title: string;
      content: string;
      icon: string;
    };
    links: NavLink[];
  };
  nav: {
    links: NavLink[];
  };
  socials: Social[];
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
  metaDesc?: string;
  /**
   * Open Graph image
   *
   * Initial value: `ogImageDefault`
   */
  ogImage?: StaticImageData;
  /**
   * Open Graph image alt text
   *
   * Initial value: `ogAltText`
   */
  ogAltText?: string;
}

export interface IBanner {
  title: string;
  backgroundImage: StaticImageData | string;
}

export interface IPage {
  banner?: IBanner;
  seo: ISeo;
}

export interface IFormField {
  type: string;
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
  rows?: number;
}

export interface ICheckboxGroup extends IFormField {
  options?: { name: string; label: string }[];
}

export interface IForm {
  [x: string]: string | string[];
}
