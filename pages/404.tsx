// Import assets
import lottie from '@/assets/lotties/shared/404.json';

import { Player } from '@lottiefiles/react-lottie-player';
import { Typography } from '@mui/material';
import { AnimatedButton } from 'components/shared';
import Link from 'next/link';

const Custom404 = () => {
  return (
    <div className="absolute transform-center">
      <Player className="w-screen h-106 !-mt-24 xs:!-mt-16" autoplay loop src={lottie} />
      <div className="-translate-y-16 xs:-translate-y-10">
        <Typography
          variant="h1"
          className="text-4xl md:text-7xl font-extrabold tracking-tight leading-tight md:leading-none text-center"
        >
          Ooops... 404!
        </Typography>
        <Typography
          variant="h5"
          color="text.secondary"
          className="mt-2 text-lg md:text-xl font-medium !font-body tracking-tight text-center"
        >
          The page you requested could not be found.
        </Typography>
        <Link href="/">
          <a className="block text-center font-normal mt-4">
            <AnimatedButton>Back to Home</AnimatedButton>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Custom404;
