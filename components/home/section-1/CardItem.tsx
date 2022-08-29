import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import clsx from 'clsx';
import useInView from 'hooks/useInView';
import { sanitize } from 'lib/dompurify';
import { ISection1Item } from 'models/home';
import Tilt from 'react-parallax-tilt';
import styles from './CardItem.module.css';

interface IProps extends ISection1Item {
  index: number;
}

const CardItem = ({ index, icon, title, content }: IProps) => {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));
  const [ref, inView] = useInView<HTMLDivElement>('30px 0px 0px 0px');

  return (
    <Box
      ref={ref}
      className={clsx('translate-y-0 opacity-0 backdrop-blur-sm', inView && styles.slideUp)}
      sx={{
        animationDelay: `${index * 0.3}s`,
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
