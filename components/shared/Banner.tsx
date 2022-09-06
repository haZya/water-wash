import bannerImage from '@/assets/images/shared/banner/1920x400.png';

import { Box, Typography } from '@mui/material';
import { sanitize } from 'lib/dompurify';
import { RootState } from 'lib/redux';
import { useSelector } from 'react-redux';
import { Image } from '.';

const Banner = () => {
  const { title, backgroundImage } = useSelector(({ shared }: RootState) => shared.layout.banner);

  return (
    <section aria-labelledby="banner-section-title" className="fixed -z-10">
      <header className="absolute transform-center z-10">
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
            backgroundColor: (theme) => theme.palette.primary[300],
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
