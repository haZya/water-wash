import bannerImage from '@/assets/images/shared/banner/1920x400.png';

import { Box, Typography, useScrollTrigger } from '@mui/material';
import clsx from 'clsx';
import { sanitize } from 'lib/dompurify';
import { IBanner } from 'models/shared';
import { Image } from '..';

const Banner = ({ title, backgroundImage }: IBanner) => {
  const navSticky = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return (
    <section aria-labelledby="banner-section-title" className="fixed top-0 left-0 -z-10">
      <header
        className={clsx(
          'absolute transform-center transition-all duration-500 z-10',
          !navSticky && 'mt-6'
        )}
      >
        <Typography
          className="text-white/70 relative text-5xl xs:text-6xl sm:text-7xl text-center font-bold leading-tight"
          id="banner-section-title"
          variant="h1"
          dangerouslySetInnerHTML={{ __html: sanitize(title) }}
        />
      </header>
      <Box
        sx={{
          width: '100vw',
          height: 'var(--banner-height)',
          '&::after': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: (theme) => theme.palette.primary[200],
            opacity: 0.3,
          },
        }}
      >
        <Image src={bannerImage} alt="Banner" layout="fill" />
      </Box>
    </section>
  );
};

export default Banner;