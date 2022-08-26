import { Box, Typography } from '@mui/material';
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
    <section aria-labelledby="section-2-title">
      <div className="container mx-auto pt-16">
        <header className="flex flex-col items-center space-y-8 mb-16">
          <Typography
            className="text-3xl sm:text-4xl text-center font-bold leading-tight"
            id="section-2-title"
            variant="h2"
            color="text.secondary"
          >
            <div dangerouslySetInnerHTML={{ __html: sanitize(title) }} />
          </Typography>
        </header>
        <Script src={url} strategy="lazyOnload"></Script>
        <Box
          className={className}
          sx={{
            '.Main__Container-sc-1n4ud0o-0': {
              maxWidth: 1280,
            },
          }}
        />
      </div>
    </section>
  );
};

export default Section3;
