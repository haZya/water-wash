import { RootState } from 'lib/redux';
import { useSelector } from 'react-redux';
import AnimatedItem from './AnimatedItem';

const Hero = () => {
  const { items } = useSelector(({ home }: RootState) => home.hero);

  return (
    <div className="relative h-screen overflow-hidden">
      <h1 className="text-2xl absolute-center">Home page</h1>
      {items.map((item, i) => (
        <AnimatedItem key={item.title} index={i} {...item} />
      ))}
    </div>
  );
};

export default Hero;
