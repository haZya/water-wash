// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/pagination';

import logo from '@/assets/logos/logo.svg';

import { Box } from '@mui/material';
import clsx from 'clsx';
import { Image } from 'components/shared';
import { RootState } from 'lib/redux';
import Link from 'next/link';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { EffectCards, Pagination, SwiperOptions } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { AnimatedItem, MobileCard } from '.';
import styles from './Hero.module.css';

const swiperOptions: SwiperOptions = {
  grabCursor: true,
  effect: 'cards',
  pagination: {
    clickable: true,
    clickableClass: clsx('!-bottom-8', styles.swiperPagination),
  },
  modules: [EffectCards, Pagination],
};

const Hero = () => {
  const { items } = useSelector(({ home }: RootState) => home.hero);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section aria-label="hero" className="relative h-screen overflow-hidden">
      <div className="hidden sm:block">
        <Link href="/">
          <a className="absolute-center w-[56rem] h-[56rem] lg:w-[64rem] lg:h-[64rem] xl:w-[72rem] xl:h-[72rem] z-10">
            <div className={clsx('pointer-events-none', styles.logo)}>
              <Image src={logo} alt="logo" priority />
            </div>
          </a>
        </Link>
        {items.map((item, i) => (
          <AnimatedItem key={item.title} index={i} {...item} />
        ))}
      </div>
      <Box
        className="flex-center flex-col sm:hidden w-full h-full transition-colors duration-500"
        sx={{ backgroundColor: items[activeIndex]?.color }}
      >
        <Link href="/">
          <a className={clsx('max-w-96 max-h-96 -mb-16 -mt-24', styles.logoMobile)}>
            <div className="pointer-events-none">
              <Image src={logo} alt="logo" priority />
            </div>
          </a>
        </Link>
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
              className={clsx(
                'flex flex-col justify-around items-center rounded-2xl bg-white w-full h-full',
                styles.swiperSlide
              )}
            >
              <MobileCard {...item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </section>
  );
};

export default Hero;
