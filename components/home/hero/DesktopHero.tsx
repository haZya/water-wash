import clsx from 'clsx';
import { Image } from 'components/shared';
import { RootState } from 'lib/redux';
import Link from 'next/link';
import Tilt from 'react-parallax-tilt';
import { useSelector } from 'react-redux';
import WaterWave from 'react-water-wave';
import AnimatedItem from './AnimatedItem';
import styles from './Hero.module.css';

const DesktopHero = () => {
  const { logo } = useSelector(({ shared }: RootState) => shared.layout.layoutContent);
  const { items } = useSelector(({ home }: RootState) => home.content.hero);

  return (
    <WaterWave
      className="w-full h-full bg-cover bg-center bg-opacity-10"
      imageUrl="/assets/images/home/hero-section/bg.jpg"
      dropRadius={36}
      perturbance={0.04}
    >
      {() => (
        <div className="w-full h-full">
          <Link href="/" shallow scroll>
            <a className="absolute transform-center z-10">
              <Tilt transitionSpeed={2000} trackOnWindow>
                <Image
                  className={clsx(
                    'pointer-events-none select-none w-96 lg:w-[44rem] xl:w-[48rem]',
                    styles.logo
                  )}
                  src={logo}
                  alt="logo"
                  width={1129.725}
                  height={726.354}
                  priority
                />
              </Tilt>
            </a>
          </Link>
          {items.map((item, i) => (
            <AnimatedItem key={item.title} index={i} {...item} />
          ))}
        </div>
      )}
    </WaterWave>
  );
};

export default DesktopHero;
