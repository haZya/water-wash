import { Box, Typography } from '@mui/material';
import clsx from 'clsx';
import { Image, useStaggerItem } from 'components/shared';
import { useInView } from 'hooks';
import { ISpecializationSectionItem } from 'models/commercial';
import { useEffect, useState } from 'react';
import styles from './SpecializationItem.module.css';

interface IProps extends ISpecializationSectionItem {
  index: number;
}

const SpecializationItem = ({ index, icon, title }: IProps) => {
  const [animating, setAnimating] = useState(false);
  const [ref, inView] = useInView({ threshold: !animating ? 1 : undefined });

  const { animate, handleAnimationStart, handleAnimationEnd } = useStaggerItem(
    'specialization',
    index,
    inView
  );

  useEffect(() => {
    setAnimating(animate);
  }, [animate]);

  return (
    <Box
      ref={ref}
      className={clsx(
        'group opacity-0 invisible w-1/2 sm:w-1/3 lg:w-1/4 xl:w-1/5 px-1 xs:px-2 py-2',
        animate && styles.slideUp
      )}
      onAnimationStart={handleAnimationStart}
      onTransitionEnd={handleAnimationEnd}
      sx={(theme) => ({
        animationDelay: `${0.1}s`,
        [theme.breakpoints.down(375)]: {
          width: '100% !important',
          px: '2rem !important',
        },
      })}
    >
      <div className="flex items-center gap-2">
        <Box
          className="bg-primary-500 group-hover:bg-secondary-500 transition-color duration-700 rounded-lg w-10 h-10 xs:w-12 xs:h-12"
          sx={{
            '& img': {
              filter:
                'invert(97%) sepia(68%) saturate(17%) hue-rotate(106deg) brightness(104%) contrast(100%)',
            },
          }}
        >
          <Image {...icon} className="min-w-10 p-2" />
        </Box>
        <Typography
          className="text-base md:text-lg leading-4 xs:!leading-tight tracking-tighter xs:tracking-tight"
          variant="h3"
        >
          {title}
        </Typography>
      </div>
    </Box>
  );
};

export default SpecializationItem;
