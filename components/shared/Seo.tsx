import { ISeo } from 'models/shared';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';

const removeLeadingSlash = (slug: string) =>
  slug.startsWith('/') ? slug.substring(1, slug.length) : slug;

interface IProps extends Omit<ISeo, 'metaTitle'> {
  metaTitle: string;
}

const Seo = ({ indexing = false, metaTitle, metaDescription, metaImage }: IProps) => {
  const { pathname } = useRouter();
  const pageUrl = `${process.env.NEXT_PUBLIC_FRONTEND_URL}/${removeLeadingSlash(pathname)}`;
  metaTitle = `${metaTitle} - ${process.env.NEXT_PUBLIC_SITE_NAME}`;

  return (
    <NextSeo
      title={metaTitle}
      description={metaDescription}
      canonical={pageUrl}
      noindex={!indexing}
      nofollow={!indexing}
      openGraph={{
        type: 'website',
        url: pageUrl,
        title: metaTitle,
        description: metaDescription,
        images: metaImage
          ? [
              {
                ...metaImage,
                url: process.env.NEXT_PUBLIC_FRONTEND_URL + metaImage.url,
              },
            ]
          : undefined,
        site_name: process.env.NEXT_PUBLIC_SITE_NAME,
      }}
      // twitter={{
      //   handle: '@',
      //   site: '@',
      //   cardType: 'summary_large_image',
      // }}
    />
  );
};

export default Seo;
