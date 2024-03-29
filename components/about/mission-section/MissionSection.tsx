import { Typography } from '@mui/material';
import { Image } from 'components/shared';
import { sanitize } from 'lib/dompurify';
import { RootState } from 'lib/redux';
import { useSelector } from 'react-redux';

const MissionSection = () => {
  const { title, content, image } = useSelector(
    ({ about }: RootState) => about.content.missionSection
  );

  return (
    <section aria-labelledby="mission-section-title">
      <div className="container mx-auto">
        <header className="flex flex-col space-y-8 mb-8 sm:mb-12">
          <Typography
            className="relative text-4xl sm:text-5xl text-center xs:text-start font-bold leading-tight"
            id="mission-section-title"
            variant="h2"
            color="text.secondary"
            dangerouslySetInnerHTML={{ __html: sanitize(title) }}
          />
        </header>
        <div className="space-y-6">
          <Image
            {...image}
            className="w-64 h-auto xs:float-right mx-auto xs:ml-8 sm:mb-4"
            sizes="(max-width: 640px) 100vw,
              (max-width: 1024px) 50vw,
              33vw"
          />
          <Typography
            className="text-base sm:text-lg text-justify font-medium mx-2 md:mx-0"
            dangerouslySetInnerHTML={{ __html: sanitize(content) }}
          />
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
