import { Box, Typography } from '@mui/material';
import clsx from 'clsx';
import { Image, useStaggerItem } from 'components/shared';
import { useInView } from 'hooks';
import { ISpecializationSectionItem } from 'models/residential';
import { useEffect, useState } from 'react';
import styles from './SpecializationItem.module.css';

interface IProps extends ISpecializationSectionItem {
  index: number;
}

const SpecializationItem = ({ index, icon, title }: IProps) => {
  const [animating, setAnimating] = useState(false);
  const [ref, inView] = useInView({ threshold: !animating ? 0.75 : undefined });

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
        'group opacity-0 invisible col-span-5 xs:col-span-4 space-y-2',
        index % 2 === 0
          ? 'xs:text-end col-start-3 xs:col-start-1'
          : 'xs:text-start col-start-7 xs:col-start-9',
        animate && styles.slideUp
      )}
      onAnimationStart={handleAnimationStart}
      onTransitionEnd={handleAnimationEnd}
      sx={{
        animationDelay: `${0.1}s`,
      }}
    >
      <Box
        className="bg-primary-500 group-hover:bg-secondary-500 transition-color duration-700 rounded-lg w-12 h-12 p-2"
        sx={{
          '& img': {
            filter:
              'invert(97%) sepia(68%) saturate(17%) hue-rotate(106deg) brightness(104%) contrast(100%)',
          },
        }}
      >
        <Image {...icon} />
      </Box>
      <Typography className="text-xl" variant="h3">
        {title}
      </Typography>
    </Box>
  );
};

export default SpecializationItem;