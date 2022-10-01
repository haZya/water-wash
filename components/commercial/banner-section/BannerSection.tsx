import { Player } from '@lottiefiles/react-lottie-player';
import { RootState } from 'lib/redux';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { backendUrl } from 'utils/env';

const BannerSection = () => {
  const {
    lottie: { src },
  } = useSelector(({ commercial }: RootState) => commercial.content.bannerSection);
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
      aria-label="Commercial"
      className="relative m-auto sm:w-[80rem] md:w-[100rem] pt-[90%] sm:pt-[68rem] mt-8 overflow-hidden"
    >
      <Player className="absolute transform-center w-full !mt-16" autoplay loop src={file} />
    </section>
  );
};

export default BannerSection;
