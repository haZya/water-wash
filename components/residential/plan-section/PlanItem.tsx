import { Check } from '@mui/icons-material';
import { Box, Chip, Theme, Typography, useMediaQuery } from '@mui/material';
import clsx from 'clsx';
import { useStaggerItem } from 'components/shared';
import { useInView } from 'hooks';
import { sanitize } from 'lib/dompurify';
import { IPlanSectionItem } from 'models/residential';
import { useEffect, useState } from 'react';
import Tilt from 'react-parallax-tilt';
import styles from './PlanItem.module.css';

interface IProps extends IPlanSectionItem {
  index: number;
}

const PlanItem = ({ index, tag, title, bullets }: IProps) => {
  const mdDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));
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
    <div className={clsx(styles.wrapper, 'h-full')}>
      <Tilt className="w-full h-full" scale={mdDown ? 1 : 1.06}>
        <Box
          ref={ref}
          className={clsx(
            'opacity-0 invisible rounded-3xl border shadow-md h-full',
            animate && styles.slideUp
          )}
          onAnimationStart={handleAnimationStart}
          onAnimationEnd={handleAnimationEnd}
          sx={{
            animationDelay: `${(index + 1) * 0.15}s`,
          }}
        >
          {tag && (
            <div className="flex items-center justify-center -mt-8 translate-y-4">
              <Chip
                label={tag}
                color="primary"
                className="flex items-center h-8 px-12 rounded-full text-base text-white font-medium text-center leading-none"
              />
            </div>
          )}
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
                  bgcolor: 'currentColor',
                  bottom: '-6px',
                  left: 0,
                  width: '48px',
                  height: '4px',
                  borderRadius: '10px',
                },
              }}
              dangerouslySetInnerHTML={{ __html: sanitize(title) }}
            />
            <div className="space-y-1">
              {bullets.map((b) => (
                <div key={b} className="flex space-x-2">
                  <Check color="success" />
                  <Typography
                    className="text-base font-medium"
                    color="text.secondary"
                    dangerouslySetInnerHTML={{ __html: sanitize(b) }}
                  />
                </div>
              ))}
            </div>
          </div>
        </Box>
      </Tilt>
    </div>
  );
};

export default PlanItem;
