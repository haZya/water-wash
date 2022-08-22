import { Box, Typography } from '@mui/material';
import clsx from 'clsx';
import { sanitize } from 'lib/dompurify';
import { ISection1Item } from 'models/home';
import styles from './CardItem.module.css';

interface IProps extends ISection1Item {
  index: number;
  inView: boolean;
}

const CardItem = ({ index, inView, icon, title, content }: IProps) => {
  return (
    <Box
      className={clsx('translate-y-16 opacity-0', inView && styles.slideUp)}
      sx={{
        animationDelay: `${index * 0.3}s`,
      }}
    >
      <div
        className={clsx(
          'group w-full h-full bg-white shadow hover:shadow-xl rounded-xl overflow-hidden px-4 py-8 space-y-4 will-change-transform transform-gpu',
          styles.wrapper
        )}
      >
        <div
          className="flex-center text-white bg-secondary-main group-hover:bg-primary-main transition-color duration-700 rounded-full w-20 h-20 mx-auto"
          dangerouslySetInnerHTML={{ __html: sanitize(icon) }}
        />
        <Typography className="text-center text-lg font-medium" variant="h3">
          {title}
        </Typography>
        <Typography className="text-center text-xs">{content}</Typography>
      </div>
    </Box>
  );
};

export default CardItem;
