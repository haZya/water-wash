import { RootState } from 'lib/redux';
import { useSelector } from 'react-redux';
import { ValueItem } from '.';

const ValueSection = () => {
  const { items } = useSelector(({ about }: RootState) => about.content.valueSection);

  return (
    <section aria-label="Our Values">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-6 lg:gap-y-0 md:gap-x-6 items-center">
          {items.map((b, i) => (
            <ValueItem key={b.title} index={i} {...b} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueSection;
