// Import assets
import image from '@/assets/images/residential/mission-section/800.png';

import { Typography } from '@mui/material';
import { Image } from 'components/shared';
import { sanitize } from 'lib/dompurify';
import { RootState } from 'lib/redux';
import { useSelector } from 'react-redux';

const MissionSection = () => {
  const { title, mission, content } = useSelector(
    ({ residential }: RootState) => residential.content.missionSection
  );

  return (
    <section aria-labelledby="mission-section-title" className="relative overflow-hidden">
      <div className="container mx-auto overflow-hidden">
        <header className="flex flex-col items-center space-y-6 sm:space-y-12">
          <Typography
            className="relative text-3xl xs:text-4xl sm:text-5xl text-center font-bold leading-tight"
            id="mission-section-title"
            variant="h2"
            color="text.secondary"
            dangerouslySetInnerHTML={{ __html: sanitize(title) }}
          />
        </header>
        <div className="space-y-8 sm:space-y-12">
          <div className="xs:flex md:block space-y-10 xs:space-y-16">
            <div className="order-last relative max-w-64 xs:max-w-80 md:max-w-96 xs:min-w-68 sm:min-w-80 mx-auto md:float-right xs:ml-24 xs:pb-12 space-y-6">
              <Image
                className="hidden xs:block w-full h-auto mx-auto rounded-xl"
                src={image}
                alt="Carbon Neutral Certified"
                sizes="(max-width: 640px) 100vw,
              (max-width: 1024px) 50vw,
              33vw"
                placeholder="blur"
              />
              <Image
                className="xs:absolute xs:bottom-0 xs:-left-16 xs:max-w-52 md:max-w-60 h-auto mx-auto rounded-lg"
                src={content.badge}
                alt="Badge"
                sizes="(max-width: 640px) 50vw,
              (max-width: 1024px) 20vw,
              15vw"
                placeholder="blur"
              />
            </div>
            <div className="space-y-12">
              <div className="space-y-4">
                <Typography
                  className="relative text-2xl xs:text-3xl sm:text-4xl text-center font-bold leading-tight"
                  variant="h3"
                  color="text.secondary"
                  dangerouslySetInnerHTML={{ __html: sanitize(mission.title) }}
                />
                <Typography
                  className="relative !font-body italic text-lg xs:text-xl sm:text-2xl text-center font-bold leading-tight tracking-widest"
                  color="text.secondary"
                  dangerouslySetInnerHTML={{ __html: sanitize(mission.subtitle) }}
                />
              </div>
              <div className="hidden md:block space-y-4">
                <Typography
                  className="relative text-2xl xs:text-3xl sm:text-4xl text-center font-bold leading-tight"
                  variant="h3"
                  color="text.secondary"
                  dangerouslySetInnerHTML={{ __html: sanitize(content.title) }}
                />
                <Typography
                  className="text-base sm:text-lg text-justify font-medium mx-2 md:mx-0"
                  dangerouslySetInnerHTML={{ __html: sanitize(content.content) }}
                />
              </div>
            </div>
          </div>
          <div className="block md:hidden space-y-4">
            <Typography
              className="relative text-2xl xs:text-3xl sm:text-4xl text-center font-bold leading-tight"
              variant="h3"
              color="text.secondary"
              dangerouslySetInnerHTML={{ __html: sanitize(content.title) }}
            />
            <Typography
              className="text-base sm:text-lg text-justify font-medium mx-2 md:mx-0"
              dangerouslySetInnerHTML={{ __html: sanitize(content.content) }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
