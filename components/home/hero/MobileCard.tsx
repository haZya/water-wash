// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/pagination';

import { Player } from '@lottiefiles/react-lottie-player';
import { Typography } from '@mui/material';
import { IAnimatedItem } from 'models/home';

interface IProps extends Omit<IAnimatedItem, 'index' | 'color'> {}

const MobileCard = ({ lottie, icon, title, description }: IProps) => {
  return (
    <>
      <Typography
        className="flex-center text-base font-semibold -mt-4"
        color="text.secondary"
        variant="h2"
      >
        <div className="flex-center w-14 h-14" dangerouslySetInnerHTML={{ __html: icon }} />
        {title}
      </Typography>
      <Player className="max-w-52 max-h-52 xs:max-w-64 xs:max-h-64" autoplay loop src={lottie} />
      <Typography className="text-xs text-center w-40" color="text.secondary">
        {description}
      </Typography>
    </>
  );
};

export default MobileCard;
