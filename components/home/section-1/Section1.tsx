import { Typography } from '@mui/material';
import { useInView } from 'hooks';
import { sanitize } from 'lib/dompurify';
import { RootState } from 'lib/redux';
import { useSelector } from 'react-redux';
import CardItem from './CardItem';

const Section1 = () => {
  const { title, subtitle, items } = useSelector(({ home }: RootState) => home.content.section1);
  const [ref, inView] = useInView<HTMLDivElement>('-80px');

  return (
    <section aria-labelledby="section-1-title" className="bg-sky-100 py-16">
      <div className="container mx-auto">
        <header className="flex flex-col items-center">
          <Typography
            className="text-4xl text-center font-medium leading-tight"
            id="section-1-title"
            variant="h2"
          >
            <div dangerouslySetInnerHTML={{ __html: sanitize(title) }} />
          </Typography>
          <Typography className="text-center text-base my-6" variant="subtitle1">
            <div dangerouslySetInnerHTML={{ __html: sanitize(subtitle) }} />
          </Typography>
        </header>
        <div ref={ref} className="grid grid-cols-3 gap-12 mt-4">
          {items.map((item, i) => (
            <CardItem key={item.title} index={i} inView={inView} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section1;
