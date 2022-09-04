import { Typography } from '@mui/material';
import { sanitize } from 'lib/dompurify';
import { RootState } from 'lib/redux';
import { useSelector } from 'react-redux';

const ReviewSection = () => {
  const {
    title,
    script: { url, className },
  } = useSelector(({ home }: RootState) => home.content.reviewSection);

  return (
    <section aria-labelledby="review-section-title">
      <div className="container mx-auto pt-16 pb-8 overflow-hidden">
        <header className="flex flex-col items-center mb-16">
          <Typography
            className="relative text-3xl xs:text-4xl sm:text-5xl text-center font-bold leading-tight"
            id="review-section-title"
            variant="h1"
            color="text.secondary"
          >
            <div dangerouslySetInnerHTML={{ __html: sanitize(title) }} />
          </Typography>
        </header>
        {/* <Script src={url} strategy="lazyOnload"></Script>
        <div className={className} /> */}
      </div>
    </section>
  );
};

export default ReviewSection;
