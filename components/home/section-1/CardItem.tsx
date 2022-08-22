import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import clsx from 'clsx';
import useInView from 'hooks/useInView';
import { sanitize } from 'lib/dompurify';
import { ISection1Item } from 'models/home';
import styles from './CardItem.module.css';

interface IProps extends ISection1Item {
  index: number;
}

const CardItem = ({ index, icon, title, content }: IProps) => {
  const theme = useTheme();
  const xsDown = useMediaQuery(theme.breakpoints.down('xs'));
  const [ref, inView] = useInView<HTMLDivElement>(xsDown ? '-10px' : '-80px');

  return (
    <Box
      ref={ref}
      className={clsx('translate-y-16 opacity-0', inView && styles.slideUp)}
      sx={{
        animationDelay: `${index * 0.3}s`,
      }}
    >
      <div
        className={clsx(
          'group w-full h-full backdrop-blur-sm bg-white/50 hover:bg-white/80 shadow hover:shadow-xl rounded-xl overflow-hidden px-4 py-8 space-y-4 will-change-transform transform-gpu',
          styles.wrapper
        )}
      >
        <div
          className="flex-center text-white bg-primary-100 group-hover:bg-secondary-400 transition-color duration-700 rounded-full w-20 h-20 mx-auto"
          dangerouslySetInnerHTML={{ __html: sanitize(icon) }}
        />
        <Typography className="text-center text-lg font-medium select-none" variant="h3">
          {title}
        </Typography>
        <Typography className="text-center text-xs select-none">{content}</Typography>
      </div>
    </Box>
  );
};

export default CardItem;
