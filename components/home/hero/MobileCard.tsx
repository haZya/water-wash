// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/pagination';

import { Player } from '@lottiefiles/react-lottie-player';
import { Box, Typography } from '@mui/material';
import clsx from 'clsx';
import { Image } from 'components/shared';
import { IAnimatedItem } from 'models/home';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { backendUrl } from 'utils/env';
import styles from './Hero.module.css';

interface IProps extends Omit<IAnimatedItem, 'index' | 'color'> {}

const MobileCard = ({ lottie: { src }, icon, title, description, path }: IProps) => {
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
    <Link href={path}>
      <a className="flex flex-col justify-around items-center w-full h-full">
        <Typography className="text-base font-semibold" color="text.secondary" variant="h2">
          <Box
            className="mx-auto w-7"
            sx={{
              '& img': {
                filter:
                  'invert(41%) sepia(0%) saturate(0%) hue-rotate(282deg) brightness(96%) contrast(91%)',
              },
            }}
          >
            <Image {...icon} placeholder="empty" />
          </Box>
          {title}
        </Typography>
        <Player
          className={clsx('max-w-52 max-h-52 xs:max-w-64 xs:max-h-64 drop-shadow-lg', styles.float)}
          autoplay
          loop
          src={file}
          style={{ animationDelay: '1s' }}
        />
        <Typography className="text-xs text-center w-48" color="text.secondary">
          {description}
        </Typography>
      </a>
    </Link>
  );
};

export default MobileCard;
