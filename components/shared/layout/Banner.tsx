// Import assets; TODO: From CMS
import aboutBannerImage from '@/assets/images/about/banner/banner.jpg';
import contactBannerImage from '@/assets/images/contact/banner/banner.jpg';

import { Box, Typography, useScrollTrigger } from '@mui/material';
import clsx from 'clsx';
import { useInView } from 'hooks';
import { sanitize } from 'lib/dompurify';
import { IBanner } from 'models/shared';
import { Image } from '..';

const Banner = ({ title, backgroundImage }: IBanner) => {
  const [ref, inView] = useInView();
  const navSticky = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return (
    <section ref={ref} aria-labelledby="banner-section-title" className="pt-0">
      <div className="fixed top-0 left-0 -z-10">
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
        {inView && (
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
                backgroundColor: 'rgb(0 0 0)',
                opacity: 0.6,
              },
            }}
          >
            <Image
              src={title === 'About Us' ? aboutBannerImage : contactBannerImage}
              alt="Banner"
              fill
              placeholder="blur"
            />
          </Box>
        )}
      </div>
    </section>
  );
};

export default Banner;
