// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/pagination';

import { Player } from '@lottiefiles/react-lottie-player';
import { Typography } from '@mui/material';
import clsx from 'clsx';
import { sanitize } from 'lib/dompurify';
import { IAnimatedItem } from 'models/home';
import styles from './Hero.module.css';

interface IProps extends Omit<IAnimatedItem, 'index' | 'color'> {}

const MobileCard = ({ lottie, icon, title, description }: IProps) => {
  return (
    <>
      <Typography className="text-base font-semibold" color="text.secondary" variant="h2">
        <div className="mx-auto w-7" dangerouslySetInnerHTML={{ __html: sanitize(icon) }} />
        {title}
      </Typography>
      <Player
        className={clsx('max-w-52 max-h-52 xs:max-w-64 xs:max-h-64 drop-shadow-lg', styles.float)}
        autoplay
        loop
        src={lottie}
        style={{ animationDelay: '1s' }}
      />
      <Typography className="text-xs text-center w-40" color="text.secondary">
        {description}
      </Typography>
    </>
  );
};

export default MobileCard;
