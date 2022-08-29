import { Typography } from '@mui/material';
import { sanitize } from 'lib/dompurify';
import { RootState } from 'lib/redux';
import Script from 'next/script';
import { useSelector } from 'react-redux';

const Section3 = () => {
  const {
    title,
    script: { url, className },
  } = useSelector(({ home }: RootState) => home.content.section3);

  return (
    <section aria-labelledby="section-3-title">
      <div className="container mx-auto pt-16 overflow-hidden">
        <header className="flex flex-col items-center mb-16">
          <Typography
            className="text-3xl sm:text-4xl text-center font-bold leading-tight"
            id="section-3-title"
            variant="h1"
            color="text.secondary"
          >
            <div dangerouslySetInnerHTML={{ __html: sanitize(title) }} />
          </Typography>
        </header>
        <Script src={url} strategy="lazyOnload"></Script>
        <div className={className} />
      </div>
    </section>
  );
};

export default Section3;
