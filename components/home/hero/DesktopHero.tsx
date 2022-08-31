// import assets

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
    <>
      {/* <div className="absolute w-full h-full bg-transparent">
        <div className="absolute w-full h-full backdrop-blur-lg pointer-events-none bg-white/10 z-10"></div>
        <div
          className={clsx(
            'absolute transform-center top-1/4 left-1/4 w-[56rem] h-[56rem] mt-36 -ml-32 opacity-60',
            styles.floatBg
          )}
        >
          <Image src={bg1} alt="" layout="responsive" />
        </div>
        <div
          className={clsx(
            'absolute transform-center top-3/4 left-3/4 w-[64rem] h-[64rem] -mt-14 opacity-60',
            styles.floatBg
          )}
        >
          <Image src={bg2} alt="" layout="responsive" />
        </div>
      </div> */}
      <WaterWave
        imageUrl={'/assets/svgs/home/hero/bg12.png'}
        style={{
          width: '100%',
          height: '100%',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: 40,
        }}
      >
        {() => (
          <div
            className={clsx(
              'w-full h-full'
              // ' bg-gradient-to-r from-primary-100 to-secondary-100'
            )}
          >
            <div className="backdrop-blur-sm- w-full h-full">
              <Link href="/" shallow>
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
          </div>
        )}
      </WaterWave>
    </>
  );
};

export default DesktopHero;
