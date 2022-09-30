import { Player } from '@lottiefiles/react-lottie-player';
import { RootState } from 'lib/redux';
import { useSelector } from 'react-redux';

const BannerSection = () => {
  const { lottie } = useSelector(({ commercial }: RootState) => commercial.content.bannerSection);

  return (
    <section
      aria-label="Commercial"
      className="relative m-auto sm:w-[80rem] pt-full sm:pt-[68rem] overflow-hidden"
    >
      <Player
        className="absolute transform-center w-full !mt-10 xs:!mt-16"
        autoplay
        loop
        src={lottie}
      />
    </section>
  );
};

export default BannerSection;
