// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/pagination';

import { Box } from '@mui/material';
import clsx from 'clsx';
import { RootState } from 'lib/redux';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { EffectCards, Pagination, SwiperOptions } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './Hero.module.css';
import MobileCard from './MobileCard';

const swiperOptions: SwiperOptions = {
  grabCursor: true,
  effect: 'cards',
  pagination: {
    clickable: true,
    clickableClass: clsx('!-bottom-8', styles.swiperPagination),
  },
  modules: [EffectCards, Pagination],
};

const MobileHero = () => {
  const { items } = useSelector(({ home }: RootState) => home.content.hero);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Box
      className="flex-center pt-14 w-full h-full transition-colors duration-500"
      sx={{ bgcolor: items[activeIndex]?.color }}
    >
      <Swiper
        className="max-w-72 w-3/4 xs:max-w-90 xs:w-2/4 h-96 transform-gpu"
        {...swiperOptions}
        onRealIndexChange={(swiper) => {
          setActiveIndex(swiper.realIndex);
        }}
      >
        {items.map((item) => (
          <SwiperSlide
            key={item.title}
            className={clsx('rounded-2xl backdrop-blur-lg bg-white/70', styles.swiperSlide)}
          >
            <MobileCard {...item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default MobileHero;
