import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import clsx from 'clsx';
import { useStaggerItem } from 'components/shared';
import { sanitize } from 'lib/dompurify';
import { IDescriptiveSectionItem } from 'models/home';
import Tilt from 'react-parallax-tilt';
import styles from './CardItem.module.css';

interface IProps extends IDescriptiveSectionItem {
  index: number;
  inView: boolean;
}

const CardItem = ({ index, inView, icon, title, content }: IProps) => {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));

  const { animate, handleAnimationStart, handleAnimationEnd } = useStaggerItem(
    'descriptive',
    index,
    inView
  );

  console.log('ind', index);

  return (
    <Box
      className={clsx(
        'translate-y-0 opacity-0 invisible backdrop-blur-sm',
        animate && styles.slideUp
      )}
      onAnimationStart={handleAnimationStart}
      onAnimationEnd={handleAnimationEnd}
      sx={{
        animationDelay: `${index * 0.15}s`,
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
