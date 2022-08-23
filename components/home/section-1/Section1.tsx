import { Typography } from '@mui/material';
import clsx from 'clsx';
import { Image } from 'components/shared';
import { sanitize } from 'lib/dompurify';
import { RootState } from 'lib/redux';
import { useSelector } from 'react-redux';
import CardItem from './CardItem';
import styles from './Section1.module.css';
import Wave from './Wave';

const Section1 = () => {
  const { title, subtitle, background, items } = useSelector(
    ({ home }: RootState) => home.content.section1
  );

  return (
    <section aria-labelledby="section-1-title" className="relative overflow-hidden">
      <div className={clsx(styles.imageWrapper)}>
        <Image src={background} alt="" />
      </div>
      <div className="bg-gradient-to-r from-primary-100 to-secondary-100 pt-16 pb-4 px-2">
        <div className="container mx-auto">
          <header className="flex flex-col items-center space-y-8 mb-16">
            <Typography
              className="text-3xl sm:text-4xl text-center font-bold leading-tight"
              id="section-1-title"
              variant="h2"
              color="text.secondary"
            >
              <div dangerouslySetInnerHTML={{ __html: sanitize(title) }} />
            </Typography>
            <Typography className="text-center text-base my-6" variant="subtitle1">
              <div dangerouslySetInnerHTML={{ __html: sanitize(subtitle) }} />
            </Typography>
          </header>
          <div className="grid grid-cols-1 xs:grid-cols-3 gap-6 xs:gap-4 sm:gap-8 lg:gap-12 mt-4">
            {items.map((item, i) => (
              <CardItem key={item.title} index={i} {...item} />
            ))}
          </div>
        </div>
      </div>
      <Wave />
    </section>
  );
};

export default Section1;
