import { Typography } from '@mui/material';
import { sanitize } from 'lib/dompurify';
import { RootState } from 'lib/redux';
import { useSelector } from 'react-redux';
import { PlanItem } from '.';

const PlanSection = () => {
  const { title, plans } = useSelector(
    ({ residential }: RootState) => residential.content.planSection
  );

  return (
    <section aria-labelledby="plan-section-title" className="z-10">
      <div className="container mx-auto">
        <header className="flex flex-col space-y-8">
          <Typography
            className="relative text-4xl sm:text-5xl text-center xs:text-start font-bold leading-tight"
            id="plan-section-title"
            variant="h2"
            color="text.secondary"
            dangerouslySetInnerHTML={{ __html: sanitize(title) }}
          />
        </header>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-12 lg:gap-y-0 md:gap-x-8 items-center">
          {plans.map((b, i) => (
            <PlanItem key={b.title} index={i} {...b} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlanSection;
