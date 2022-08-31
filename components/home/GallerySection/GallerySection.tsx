import { Typography } from '@mui/material';
import { sanitize } from 'lib/dompurify';
import { RootState } from 'lib/redux';
import { useSelector } from 'react-redux';
import { GalleryItem } from '.';

const GallerySection = () => {
  const { title, items } = useSelector(({ home }: RootState) => home.content.gallerySection);

  return (
    <section aria-labelledby="section-2-title">
      <div className="container mx-auto pt-16 pb-8">
        <header className="flex flex-col items-center mb-16">
          <Typography
            className="text-3xl sm:text-4xl text-center font-bold leading-tight"
            id="section-2-title"
            variant="h1"
            color="text.secondary"
          >
            <div dangerouslySetInnerHTML={{ __html: sanitize(title) }} />
          </Typography>
        </header>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-6 md:gap-8">
          {items.map((item, i) => (
            <GalleryItem key={i} index={i} prevItem={items[i - 1]} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
