// Import Swiper styles
import 'swiper/css';

import { East, West } from '@mui/icons-material';
import { Typography } from '@mui/material';
import clsx from 'clsx';
import { sanitize } from 'lib/dompurify';
import { RootState } from 'lib/redux';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { EffectCoverflow, Navigation, SwiperOptions } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { TestimonialItem } from '.';
import styles from './TestimonialItem.module.css';

const swiperOptions: SwiperOptions = {
  speed: 950,
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  effect: 'coverflow',
  coverflowEffect: {
    slideShadows: false,
  },
  navigation: {
    prevEl: '.testimonial-prev',
    nextEl: '.testimonial-next',
  },
  modules: [EffectCoverflow, Navigation],
};

const TestimonialSection = () => {
  const { title, items } = useSelector(
    ({ commercial }: RootState) => commercial.content.testimonialSection
  );
  const initialSlide = items.length > 2 ? 2 : 1;
  const [activeIndex, setActiveIndex] = useState(initialSlide);

  return (
    <section aria-labelledby="testimonial-section-title" className="relative overflow-hidden">
      <div className="overflow-hidden">
        <header className="flex flex-col items-center space-y-6 sm:space-y-12">
          <Typography
            className="relative text-3xl xs:text-4xl sm:text-5xl text-center font-bold leading-tight"
            id="testimonial-section-title"
            variant="h2"
            color="text.secondary"
            dangerouslySetInnerHTML={{ __html: sanitize(title) }}
          />
        </header>
        <Swiper
          loop={items.length > 2}
          initialSlide={initialSlide}
          {...swiperOptions}
          onRealIndexChange={(swiper) => {
            setActiveIndex(swiper.realIndex);
          }}
        >
          {items.map((item, i) => (
            <SwiperSlide
              className={clsx(
                styles.swiperSlide,
                i === activeIndex && styles.swiperSlideActive,
                'swiper-slide !w-11/12 xs:!w-2/3 sm:!w-1/2 md:!w-3/4 lg:!w-2/3 !mx-auto backdrop-blur-lg bg-white/70 rounded-3xl border-t border-primary-100/50 shadow-lg shadow-primary-100 my-6 overflow-hidden'
              )}
              key={item.name}
            >
              <TestimonialItem {...item} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="text-center space-x-4 mt-4 mb-1.5">
          <West
            className={clsx(
              'testimonial-prev',
              'cursor-pointer text-4xl sm:text-5xl border-2 rounded-full p-1.5',
              'border-secondary-500 shadow-md shadow-secondary-500/20 hover:shadow-secondary-500/40 transition duration-300'
            )}
            color="secondary"
          />
          <East
            className={clsx(
              'testimonial-next',
              'cursor-pointer text-4xl sm:text-5xl border-2 rounded-full p-1.5',
              'border-secondary-500 shadow-md shadow-secondary-500/20 hover:shadow-secondary-500/40 transition duration-300'
            )}
            color="secondary"
          />
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
