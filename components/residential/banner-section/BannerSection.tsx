import { Player } from '@lottiefiles/react-lottie-player';
import { Box } from '@mui/material';
import { RootState } from 'lib/redux';
import { useSelector } from 'react-redux';

const BannerSection = () => {
  const { lottie } = useSelector(({ residential }: RootState) => residential.content.bannerSection);

  return (
    <section
      aria-label="Residential"
      className="relative my-auto h-full md:h-screen pt-[45rem] xs:pt-[60rem] sm:pt-[75rem] md:pt-0 overflow-hidden"
    >
      <Box
        className="absolute transform-center w-full !mt-16 xs:!mt-24 md:!mt-16"
        component={Player}
        autoplay
        loop
        src={lottie}
        style={{ height: 'calc(100vh - 150px)' }}
      />
    </section>
  );
};

export default BannerSection;
