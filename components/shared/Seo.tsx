// Import assets
import ogImageDefault from '@/assets/logos/logo.png'; // TODO: add valid image later
import { ISeo } from 'models/shared';

import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';

const removeLeadingSlash = (slug: string) =>
  slug.startsWith('/') ? slug.substring(1, slug.length) : slug;

interface IProps extends Omit<ISeo, 'metaTitle'> {
  metaTitle: string;
}

const Seo = ({ indexing = false, metaTitle, metaDesc, ogImage, ogAltText }: IProps) => {
  const { pathname } = useRouter();
  const pageUrl = `${process.env.NEXT_PUBLIC_FRONTEND_URL}/${removeLeadingSlash(pathname)}`;
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
