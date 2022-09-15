import { Typography } from '@mui/material';
import { sanitize } from 'lib/dompurify';
import { RootState } from 'lib/redux';
import Script from 'next/script';
import { useSelector } from 'react-redux';

const ReviewSection = () => {
  const {
    title,
    script: { url, className },
  } = useSelector(({ home }: RootState) => home.content.reviewSection);

  return (
    <section aria-labelledby="review-section-title">
      <div className="container mx-auto overflow-hidden">
        <header className="flex flex-col items-center">
          <Typography
            className="relative text-3xl xs:text-4xl sm:text-5xl text-center font-bold leading-tight"
            id="review-section-title"
            variant="h1"
            color="text.secondary"
            dangerouslySetInnerHTML={{ __html: sanitize(title) }}
          />
        </header>
        <Script src={url} strategy="lazyOnload"></Script>
        <div className={className} />
      </div>
    </section>
  );
};

export default ReviewSection;
