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
import Tilt from 'react-parallax-tilt';
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
  const { items } = useSelector(({ home }: RootState) => home.content.hero);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section aria-label="hero" className="relative h-screen overflow-hidden">
      <div className="hidden sm:block">
        <Link href="/">
          <a className="absolute-center z-10">
            <Tilt
              className={clsx(
                'pointer-events-none flex justify-center w-96 lg:w-[44rem] xl:w-[48rem]',
                styles.logo
              )}
              transitionSpeed={2000}
              gyroscope
              trackOnWindow
            >
              <Image src={logo} alt="logo" priority />
            </Tilt>
          </a>
        </Link>
        {items.map((item, i) => (
          <AnimatedItem key={item.title} index={i} {...item} />
        ))}
      </div>
      <Box
        className="flex-center flex-col sm:hidden w-full h-full transition-colors duration-500 gap-6"
        sx={{ backgroundColor: items[activeIndex]?.color }}
      >
        <Link href="/">
          <a className={clsx('max-w-60', styles.logoMobile)}>
            <div className="pointer-events-none drop-shadow-md">
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
                'flex flex-col justify-around items-center rounded-2xl backdrop-blur-lg bg-white/50 w-full h-full',
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
