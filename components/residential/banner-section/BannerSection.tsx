import { Player } from '@lottiefiles/react-lottie-player';
import { Box } from '@mui/material';
import { RootState } from 'lib/redux';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { backendUrl } from 'utils/env';

const BannerSection = () => {
  const {
    lottie: { src },
  } = useSelector(({ residential }: RootState) => residential.content.bannerSection);
  const [file, setFile] = useState<string>('');

  useEffect(() => {
    (async () => {
      try {
        setFile(await (await fetch(backendUrl + src)).json());
      } catch (err) {
        console.debug(err);
      }
    })();
  }, [src]);

  return (
    <section
      aria-label="Residential"
      className="relative my-auto h-full md:h-screen pt-[45rem] xs:pt-[60rem] sm:pt-[75rem] md:pt-0 overflow-hidden"
    >
      {file && (
        <Box
          className="absolute transform-center w-full !mt-16 xs:!mt-24 md:!mt-16"
          component={Player}
          autoplay
          loop
          src={file}
          style={{ height: 'calc(100vh - 150px)' }}
        />
      )}
    </section>
  );
};

export default BannerSection;
