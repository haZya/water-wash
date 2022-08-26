import { Typography } from '@mui/material';
import { sanitize } from 'lib/dompurify';
import { RootState } from 'lib/redux';
import { useSelector } from 'react-redux';
import { GalleryItem } from '.';

const Section2 = () => {
  const { title, items } = useSelector(({ home }: RootState) => home.content.section2);

  return (
    <section aria-labelledby="section-2-title">
      <div className="container mx-auto pt-16">
        <header className="flex flex-col items-center space-y-8 mb-16">
          <Typography
            className="text-3xl sm:text-4xl text-center font-bold leading-tight"
            id="section-2-title"
            variant="h2"
            color="text.secondary"
          >
            <div dangerouslySetInnerHTML={{ __html: sanitize(title) }} />
          </Typography>
        </header>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mx-2 sm:mx-0 gap-8 sm:gap-6 md:gap-8">
          {items.map((item, i) => (
            <GalleryItem key={i} index={i} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section2;
