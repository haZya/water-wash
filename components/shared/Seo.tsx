// Import assets
import ogImageDefault from '@/assets/logos/logo.png'; // TODO: add valid image later

import { NextSeo } from 'next-seo';
import { StaticImageData } from 'next/image';

const removeLeadingSlash = (slug: string) =>
  slug?.startsWith('/') ? slug.substring(1, slug.length) : slug;

export interface ISeo {
  indexing: boolean;
  metaTitle: string;
  metaDesc?: string;
  slug?: string;
  ogImage?: StaticImageData;
  ogAltText?: string;
}

const Seo = ({ indexing, metaTitle, metaDesc, ogImage, ogAltText, slug }: ISeo) => {
  const pageUrl = slug && `${process.env.NEXT_PUBLIC_FRONTEND_URL}/${removeLeadingSlash(slug)}`;
  metaTitle = `${metaTitle} - ${process.env.NEXT_PUBLIC_SITE_NAME}`;
  ogImage = ogImage ?? ogImageDefault;
  ogAltText = ogAltText ?? ''; // TODO: set later

  return (
    <NextSeo
      title={metaTitle}
      description={metaDesc}
      canonical={pageUrl}
      noindex={!indexing}
      nofollow={!indexing}
      openGraph={{
        type: 'website',
        url: pageUrl,
        title: metaTitle,
        description: metaDesc,
        images: [
          {
            url: process.env.NEXT_PUBLIC_FRONTEND_URL + ogImage.src,
            width: ogImage.width,
            height: ogImage.height,
            alt: ogAltText,
          },
        ],
        site_name: 'Water Wash',
      }}
      twitter={{
        handle: '@',
        site: '@',
        cardType: 'summary_large_image',
      }}
    />
  );
};

export default Seo;
