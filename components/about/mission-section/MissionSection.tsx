import greenTick from '@/assets/images/about/mission-section/green-tick.png';

import { Typography } from '@mui/material';
import { Image } from 'components/shared';
import { sanitize } from 'lib/dompurify';
import { RootState } from 'lib/redux';
import { useSelector } from 'react-redux';

const MissionSection = () => {
  const { title, content, badge } = useSelector(
    ({ about }: RootState) => about.content.missionSection
  );

  return (
    <section aria-labelledby="mission-section-title">
      <div className="container mx-auto py-8 sm:py-16">
        <header className="flex flex-col items-center space-y-8 mb-16">
          <Typography
            className="relative italic text-3xl xs:text-4xl sm:text-5xl text-center font-bold leading-tight z-10"
            id="mission-section-title"
            variant="h1"
            color="text.secondary"
            dangerouslySetInnerHTML={{ __html: sanitize(title) }}
          />
        </header>
        <div className="max-w-64 float-right ml-8">
          <Image src={greenTick} alt="Carbon Neutral Certified" />
        </div>
        <Typography
          className="text-lg text-justify font-medium"
          dangerouslySetInnerHTML={{ __html: sanitize(content) }}
        />
      </div>
    </section>
  );
};

export default MissionSection;
