import clsx from 'clsx';
import { Image } from 'components/shared';
import { RootState } from 'lib/redux';
import Link from 'next/link';
import Tilt from 'react-parallax-tilt';
import { useSelector } from 'react-redux';
import AnimatedItem from './AnimatedItem';
import styles from './Hero.module.css';

const DesktopHero = () => {
  const { logo } = useSelector(({ shared }: RootState) => shared.layout.layoutContent);
  const { items } = useSelector(({ home }: RootState) => home.content.hero);

  return (
    <>
      <Link href="/">
        <a className="absolute-center z-10">
          <Tilt
            className={clsx(
              'pointer-events-none flex justify-center w-96 lg:w-[44rem] xl:w-[48rem]',
              styles.logo
            )}
            transitionSpeed={2000}
            gyroscope
            trackOnWindow
          >
            <Image src={logo} alt="logo" priority />
          </Tilt>
        </a>
      </Link>
      {items.map((item, i) => (
        <AnimatedItem key={item.title} index={i} {...item} />
      ))}
    </>
  );
};

export default DesktopHero;