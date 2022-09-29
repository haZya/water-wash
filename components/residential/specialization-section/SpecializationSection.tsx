import { Typography } from '@mui/material';
import { sanitize } from 'lib/dompurify';
import { RootState } from 'lib/redux';
import { useSelector } from 'react-redux';
import { SpecializationItem } from '.';

const SpecializationSection = () => {
  const { title, specializations } = useSelector(
    ({ residential }: RootState) => residential.content.specializeSection
  );

  return (
    <section
      aria-labelledby="specialization-section-title"
      className="relative overflow-hidden pt-12 sm:pt-16"
    >
      <div className="container mx-auto overflow-hidden pb-16 sm:pb-24">
        <header className="flex flex-col items-center">
          <Typography
            className="relative text-3xl xs:text-4xl sm:text-5xl text-center font-bold leading-tight"
            id="specialization-section-title"
            variant="h2"
            color="text.secondary"
            dangerouslySetInnerHTML={{ __html: sanitize(title) }}
          />
        </header>
        <div className="grid grid-cols-12 gap-y-8">
          {specializations.map((s, i) => (
            <SpecializationItem key={s.title} index={i} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecializationSection;
