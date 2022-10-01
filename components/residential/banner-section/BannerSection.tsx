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
      className="relative m-auto sm:w-[80rem] pt-full sm:pt-[68rem] mt-8 overflow-hidden"
    >
      <Box
        className="absolute transform-center w-full !mt-16"
        component={Player}
        autoplay
        loop
        src={file}
      />
    </section>
  );
};

export default BannerSection;
