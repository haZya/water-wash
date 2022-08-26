import { StaticImageData } from 'next/image';
import { ReactNode } from 'react';

export type NavLink = {
  label: string;
  path: string;
  color: 'primary' | 'secondary';
};

export type Social = {
  label: string;
  icon: ReactNode;
  url: string;
};

export interface ILayout {
  logo: any;
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
  metaTitle: string;
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

export interface IPage {
  seo: ISeo;
}
