import { Typography } from '@mui/material';
import { sanitize } from 'lib/dompurify';
import { RootState } from 'lib/redux';
import { useSelector } from 'react-redux';
import { SpecializationItem } from '.';

const SpecializeSection = () => {
  const { title, specializations } = useSelector(
    ({ commercial }: RootState) => commercial.content.specializeSection
  );

  return (
    <section
      aria-labelledby="specialization-section-title"
      className="relative overflow-hidden pt-0 pb-16 sm:pb-24"
    >
      <div className="container mx-auto overflow-hidden">
        <header className="flex flex-col items-center">
          <Typography
            className="relative text-3xl xs:text-4xl sm:text-5xl text-center font-bold leading-tight"
            id="specialization-section-title"
            variant="h2"
            color="text.secondary"
            dangerouslySetInnerHTML={{ __html: sanitize(title) }}
          />
        </header>
      </div>
      <div className="flex flex-wrap mx-2 xs:mx-8 sm:mx-16">
        {specializations.map((s, i) => (
          <SpecializationItem key={s.title} index={i} {...s} />
        ))}
      </div>
    </section>
  );
};

export default SpecializeSection;
