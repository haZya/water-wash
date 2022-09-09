import badge1 from '@/assets/images/about/value-section/badge-1.png';
import badge2 from '@/assets/images/about/value-section/badge-2.png';
import badge3 from '@/assets/images/about/value-section/badge-3.png';

import { Box, Theme, Typography, useMediaQuery } from '@mui/material';
import clsx from 'clsx';
import { Image, useStaggerItem } from 'components/shared';
import { useInView } from 'hooks';
import { sanitize } from 'lib/dompurify';
import { IValueSectionItem } from 'models/about';
import { useEffect, useState } from 'react';
import Tilt from 'react-parallax-tilt';
import styles from './ValueItem.module.css';

interface IProps extends IValueSectionItem {
  index: number;
}

function ValueItem({ index, badge, title, content, color }: IProps) {
  const mdDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));
  const [hovering, setHovering] = useState(false);
  const [animating, setAnimating] = useState(false);
  const [ref, inView] = useInView({
    threshold: !animating ? 0.15 : undefined,
  });

  const { animate, handleAnimationStart, handleAnimationEnd } = useStaggerItem(
    'value',
    index,
    inView
  );

  useEffect(() => {
    setAnimating(animate);
  }, [animate]);

  return (
    <div className={clsx(styles.wrapper)}>
      <Tilt
        className={clsx('w-full h-full')}
        scale={mdDown ? 1 : 1.06}
        tiltMaxAngleX={mdDown ? 10 : 15}
        tiltAxis="y"
        tiltAngleYManual={
          hovering ? undefined : mdDown ? 0 : index === 0 ? 15 : index === 2 ? -15 : 0
        }
        onEnter={() => {
          setHovering(true);
        }}
        onLeave={() => {
          setHovering(false);
        }}
      >
        <Box
          ref={ref}
          className={clsx(
            'opacity-0 invisible rounded-3xl border shadow-md overflow-hidden',
            animate && styles.slideUp
          )}
          onAnimationStart={handleAnimationStart}
          onAnimationEnd={handleAnimationEnd}
          sx={{
            animationDelay: `${(index + 1) * 0.15}s`,
          }}
        >
          <Box className="py-4" sx={{ backgroundColor: color }}>
            <div className="max-w-64 mx-auto">
              <Image
                src={index === 0 ? badge1 : index === 1 ? badge2 : badge3}
                alt="Badge"
                layout="responsive"
                sizes="(max-width: 640px) 100vw,
              (max-width: 1024px) 50vw,
              33vw"
              />
            </div>
          </Box>
          <div
            className={clsx('flex flex-col max-w-sm md:max-w-none p-6 sm:py-8 sm:px-10 space-y-8')}
          >
            <Typography
              className="relative text-3xl xs:text-4xl md:text-3xl lg:text-4xl font-normal"
              variant="h3"
              sx={{
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  backgroundColor: 'currentColor',
                  bottom: '-6px',
                  left: 0,
                  width: '48px',
                  height: '4px',
                  borderRadius: '10px',
                },
              }}
              dangerouslySetInnerHTML={{ __html: sanitize(title) }}
            />
            <Typography
              className="text-base text-justify font-medium space-y-4"
              color="text.secondary"
              dangerouslySetInnerHTML={{ __html: sanitize(content) }}
            />
          </div>
        </Box>
      </Tilt>
    </div>
  );
}

export default ValueItem;
