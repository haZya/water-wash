import { styled, Typography } from '@mui/material';
import clsx from 'clsx';
import { sanitize } from 'dompurify';
import { ISection1Item } from 'models/home';
import styles from './CardItem.module.css';

const Wrapper = styled('div')(({ theme }) => ({
  transition: 'all .7s cubic-bezier(.5,2,.5,.5)',
  '::before': {
    content: "''",
    position: 'absolute',
    height: '10px',
    background: theme.palette.secondary.main,
    top: 0,
    left: 0,
    width: '100%',
  },
  '::after': {
    content: "''",
    position: 'absolute',
    top: 0,
    left: 'auto',
    right: 0,
    width: 0,
    height: '10px',
    background: theme.palette.primary.main,
    visibility: 'hidden',
    opacity: 0,
    transition: 'all .9s ease',
  },
  ':hover::after': {
    visibility: 'visible',
    opacity: 1,
    right: 'auto',
    left: 0,
    width: '100%',
  },
}));

interface IProps extends ISection1Item {
  index: number;
  inView: boolean;
}

const CardItem = ({ index, inView, icon, title, content }: IProps) => {
  return (
    <div
      className={clsx('translate-y-12 opacity-0', inView && styles.slideUp)}
      style={{
        animationDelay: `${index * 0.3}s`,
        animationTimingFunction: 'cubic-bezier(.5,2,.5,.5)',
      }}
    >
      <Wrapper
        className={clsx(
          'group relative h-full bg-white rounded-xl shadow hover:shadow-xl overflow-hidden px-4 py-8 space-y-4 hover:-translate-y-3.5 hover:scale-110 transform-gpu'
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
      </Wrapper>
    </div>
  );
};

export default CardItem;
