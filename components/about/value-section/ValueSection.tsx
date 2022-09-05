import { RootState } from 'lib/redux';
import { useSelector } from 'react-redux';
import { ValueItem } from '.';

const ValueSection = () => {
  const { items } = useSelector(({ about }: RootState) => about.content.valueSection);

  return (
    <section aria-label="Our Values">
      <div className="container mx-auto pt-20 sm:pt-40">
        <div className="h-[96rem]" />
        <div
          // variants={container}
          // initial="hidden"
          // animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-6 lg:gap-y-0 md:gap-x-6 items-center"
        >
          {items.map((b, i) => (
            <div
              key={b.title}
              // variants={item}
            >
              <ValueItem index={i} {...b} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueSection;
