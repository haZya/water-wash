import { StaticImageData } from 'next/image';

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
