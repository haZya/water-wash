import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import clsx from 'clsx';
import { useStaggerItem } from 'components/shared';
import { useInView } from 'hooks';
import { sanitize } from 'lib/dompurify';
import { IDescriptiveSectionItem } from 'models/home';
import { useEffect, useState } from 'react';
import Tilt from 'react-parallax-tilt';
import styles from './CardItem.module.css';

interface IProps extends IDescriptiveSectionItem {
  index: number;
}

const CardItem = ({ index, icon, title, content }: IProps) => {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));
  const [animating, setAnimating] = useState(false);
  const [ref, inView] = useInView({ threshold: !animating ? 0.3 : undefined });

  const { animate, handleAnimationStart, handleAnimationEnd } = useStaggerItem(
    'descriptive',
    index,
    inView
  );

  useEffect(() => {
    setAnimating(animate);
  }, [animate]);

  return (
    <Box
      ref={ref}
      className={clsx('opacity-0 invisible backdrop-blur-sm', animate && styles.slideUp)}
      onAnimationStart={handleAnimationStart}
      onAnimationEnd={handleAnimationEnd}
      sx={{
        animationDelay: `${(index + 1) * 0.15}s`,
      }}
    >
      <Tilt
        className="w-full h-full"
        scale={smDown ? 1 : 1.1}
        tiltMaxAngleX={15}
        tiltMaxAngleY={15}
      >
        <div
          className={clsx(
            'group w-full h-full bg-white/40 hover:bg-white/60 shadow hover:shadow-xl rounded-xl overflow-hidden px-4 py-8 space-y-4 will-change-transform transform-gpu',
            styles.wrapper
          )}
        >
          <div
            className="flex-center text-white bg-primary-100 group-hover:bg-secondary-400 transition-color duration-700 rounded-full w-20 h-20 mx-auto"
            dangerouslySetInnerHTML={{ __html: sanitize(icon) }}
          />
          <Typography className="text-center text-lg font-medium select-none" variant="h2">
            {title}
          </Typography>
          <Typography className="text-center text-xs select-none">{content}</Typography>
        </div>
      </Tilt>
    </Box>
  );
};

export default CardItem;
