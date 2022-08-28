import bg1 from '@/assets/svgs/home/hero/bg-1.svg';
import bg2 from '@/assets/svgs/home/hero/bg-2.svg';
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
      {/* <div className="glass w-full h-full opacity-25" /> */}
      <div
        className={clsx(
          'absolute transform-center top-1/4 left-1/4 w-[64rem] h-[64rem] opacity-80'
        )}
      >
        <Image src={bg1} alt="" layout="responsive" />
      </div>
      <div
        className={clsx(
          'absolute transform-center top-3/4 left-3/4 w-[80rem] h-[80rem] opacity-80'
        )}
      >
        <Image src={bg2} alt="" layout="responsive" />
      </div>
      <div className="backdrop-blur-xl w-full h-full">
        <div className="glass w-full h-full opacity-10" />
        <Link href="/">
          <a className="absolute transform-center z-10">
            <Tilt
              className={clsx(
                'pointer-events-none flex justify-center w-96 lg:w-[44rem] xl:w-[48rem]',
                styles.logo
              )}
              transitionSpeed={2000}
              trackOnWindow
            >
              <Image src={logo} alt="logo" priority />
            </Tilt>
          </a>
        </Link>
        {items.map((item, i) => (
          <AnimatedItem key={item.title} index={i} {...item} />
        ))}
      </div>
    </>
  );
};

export default DesktopHero;
