import { Typography } from '@mui/material';
import { Popup } from 'components/shared/popup';
import { sanitize } from 'lib/dompurify';
import { RootState } from 'lib/redux';
import { useSelector } from 'react-redux';
import { GalleryItem } from '.';

const GallerySection = () => {
  const { title, items } = useSelector(({ home }: RootState) => home.content.gallerySection);

  return (
    <section aria-labelledby="gallery-section-title">
      <div className="container mx-auto">
        <header className="flex flex-col items-center">
          <Typography
            className="relative text-3xl xs:text-4xl sm:text-5xl text-center font-bold leading-tight"
            id="gallery-section-title"
            variant="h1"
            color="text.secondary"
          >
            <div dangerouslySetInnerHTML={{ __html: sanitize(title) }} />
          </Typography>
        </header>
        <Popup className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-6 md:gap-8">
          {items.map((item, i) => (
            <GalleryItem key={i} index={i} {...item} />
          ))}
        </Popup>
      </div>
    </section>
  );
};

export default GallerySection;
