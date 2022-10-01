//#region Common
export interface IImage {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  blurDataURL?: string;
}

export interface IFile {
  src: string;
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
    mobileLinks: NavLink[];
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
  title: string;
  slug: string;
  seo: ISeo;
}
//#endregion

//#region Graphql
export type ImageResponse = {
  data: {
    attributes: IImage;
  };
};

export type FileResponse = {
  data: {
    attributes: IFile;
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
