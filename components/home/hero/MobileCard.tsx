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
      <Typography className="text-base font-semibold mt-2" color="text.secondary" variant="h2">
        {/* {icon} */}
        {title}
      </Typography>
      <Player className="w-40 h-40 xs:w-48 xs:h-48" autoplay loop src={lottie} />
      <Typography className="text-xs text-center w-40" color="text.secondary">
        {description}
      </Typography>
    </>
  );
};

export default MobileCard;
