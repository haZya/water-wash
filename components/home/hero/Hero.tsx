// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/pagination';

import { Box } from '@mui/material';
import { RootState } from 'lib/redux';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { EffectCards, Pagination, SwiperOptions } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { AnimatedItem, MobileCard } from '.';

const swiperOptions: SwiperOptions = {
  grabCursor: true,
  effect: 'cards',
  pagination: {
    clickable: true,
    horizontalClass: '!-bottom-8',
  },
  modules: [EffectCards, Pagination],
};

const Hero = () => {
  const { items } = useSelector(({ home }: RootState) => home.hero);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="relative h-screen overflow-hidden">
      <div className="hidden sm:block">
        <h1 className="text-2xl absolute-center">Home page</h1>
        {items.map((item, i) => (
          <AnimatedItem key={item.title} index={i} {...item} />
        ))}
      </div>
      <Box
        className="flex-center sm:hidden w-full h-full transition-colors duration-500"
        sx={{ backgroundColor: items[activeIndex]?.color }}
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
              className="flex flex-col justify-around items-center rounded-2xl bg-white shadow-2xl"
            >
              <MobileCard {...item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </div>
  );
};

export default Hero;
