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
            <div className="order-last relative mx-auto md:float-right xs:ml-24 xs:pb-12 space-y-6">
              <div className="relative xs:w-68 xs:h-68 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-xl overflow-hidden">
                <Image
                  {...content.image}
                  className="hidden xs:block mx-auto rounded-xl object-cover hover:scale-125 transition-transform duration-300 h-full"
                  sizes="(max-width: 640px) 100vw,
                (max-width: 1024px) 50vw,
                33vw"
                />
              </div>
              <Image
                {...content.badge}
                className="xs:absolute xs:bottom-0 xs:-left-16 max-w-52 md:max-w-60 h-auto mx-auto rounded-lg"
                sizes="(max-width: 640px) 50vw,
                (max-width: 1024px) 20vw,
                15vw"
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
                  className="relative !font-body italic text-lg xs:text-xl sm:text-2xl text-center font-normal leading-tight tracking-widest"
                  color="text.secondary"
                  dangerouslySetInnerHTML={{ __html: sanitize(mission.content) }}
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
