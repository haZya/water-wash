import { Player } from '@lottiefiles/react-lottie-player';
import { RootState } from 'lib/redux';
import { useSelector } from 'react-redux';

const BannerSection = () => {
  const { lottie } = useSelector(({ commercial }: RootState) => commercial.content.bannerSection);

  return (
    <section
      aria-label="Commercial Banner"
      className="relative my-auto h-full md:h-screen pt-96 xs:pt-[50rem] sm:pt-[60rem] md:pt-0 overflow-hidden"
    >
      <Player
        className={'absolute transform-center w-full !mt-16 xs:!mt-24 md:!mt-20'}
        autoplay
        loop
        src={lottie}
      />
    </section>
  );
};

export default BannerSection;
