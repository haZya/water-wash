import { Box, Typography } from '@mui/material';
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

function ValueItem({ index, badge, title, content }: IProps) {
  const [animating, setAnimating] = useState(false);
  const [ref, inView] = useInView({
    threshold: !animating ? 0.3 : undefined,
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
        scale={1.06}
        tiltMaxAngleX={15}
        tiltAxis="y"
        glareEnable
        glarePosition="all"
        glareMaxOpacity={0.3}
        tiltAngleYInitial={index === 0 ? -15 : index === 2 ? 15 : 0}
      >
        <Box
          ref={ref}
          className={clsx(
            'opacity-0 invisible rounded-3xl shadow-md overflow-hidden',
            animate && styles.slideUp
          )}
          onAnimationStart={handleAnimationStart}
          onAnimationEnd={handleAnimationEnd}
          sx={{
            animationDelay: `${(index + 1) * 0.15}s`,
          }}
        >
          <div className="bg-black py-4">
            <div className="max-w-64 mx-auto">
              <Image src={badge} alt="Badge" />
            </div>
          </div>
          <div
            className={clsx('flex flex-col max-w-sm md:max-w-none p-6 sm:py-8 sm:px-10 space-y-8')}
          >
            <Typography
              className="relative text-4xl font-normal"
              variant="h2"
              sx={{
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  backgroundColor: 'currentColor',
                  bottom: '-6px',
                  left: 0,
                  width: '44px',
                  height: '4px',
                  borderRadius: '10px',
                },
              }}
            >
              {title}
            </Typography>
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
