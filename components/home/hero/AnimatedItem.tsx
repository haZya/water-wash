import { Player } from '@lottiefiles/react-lottie-player';
import { Box, Typography, useTheme } from '@mui/material';
import clsx from 'clsx';
import { useWindowSize } from 'hooks';
import { IAnimatedItem } from 'models/home';
import { useMemo, useRef } from 'react';
import styles from './Hero.module.css';

type CircleTranslate = {
  circleTX: number;
  circleTY: number;
};

interface IProps extends IAnimatedItem {}

const AnimatedItem = ({ index = -1, lottie, icon, title, description, color }: IProps) => {
  const theme = useTheme();
  const { width } = useWindowSize();

  const groupRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLSpanElement>(null);

  const mdDown = width < theme.breakpoints.values.md;
  const circleScale = width * 0.009375;
  const { circleTX, circleTY } = useMemo<CircleTranslate>(() => {
    switch (index) {
      case 0:
        return { circleTX: -140, circleTY: width * (mdDown ? -0.0025 : -0.25) + 5.75 };
      case 1:
        return { circleTX: 140, circleTY: width * (mdDown ? 0.0025 : 0.25) - 3 };
      default:
        return { circleTX: 0, circleTY: 0 };
    }
  }, [index, mdDown, width]);

  return (
    <Box
      className={clsx(
        'absolute-center w-64 lg:w-80 h-auto',
        index === 0
          ? 'top-1/4 left-3/4 -mt-8 translate-x-full translate-y-[-180%]'
          : index === 1 && 'top-3/4 left-1/4 mt-8 translate-x-[-180%] translate-y-full',
        index === 0 ? styles.slideInTopRight : index === 1 && styles.slideInBottomLeft
      )}
      sx={{
        animationDelay: `${index * 0.3 + 0.3}s`,
      }}
    >
      <div
        className={clsx(
          'relative w-full h-auto pt-full',
          index === 0 ? '-ml-16 lg:-ml-28' : index === 1 && 'ml-16 lg:ml-28'
        )}
      >
        <Player className="absolute top-0 left-0 w-full h-full" autoplay loop src={lottie} />
      </div>
      <div
        className={clsx(
          'absolute-center -z-10',
          index === 0 ? 'ml-[14rem]' : index === 1 && '-ml-[14rem]'
        )}
      >
        <div ref={groupRef} className="group relative inline-block cursor-pointer w-20 h-20">
          <>
            <Box
              className={clsx(
                'absolute top-0 left-0 w-full h-full rounded-full border',
                styles.pingAnimation
              )}
              component="span"
              sx={{ borderColor: color }}
            />
            <Box
              className={clsx(
                'absolute top-0 left-0 w-full h-full rounded-full scale-0',
                styles.circleOnePulse
              )}
              component="span"
              sx={{ backgroundColor: color, animationDelay: `${1 + index * 0.6}s` }}
            />
            <Box
              className={clsx(
                'absolute top-0 left-0 w-full h-full bg-white rounded-full',
                styles.circleTwoPulse
              )}
              component="span"
              sx={{
                animationDelay: `${1 + index * 0.6 + 0.15}s`,
              }}
            />
            <Box
              className={clsx(
                'absolute top-0 left-0 w-full h-full opacity-0',
                styles.circleMainPulse
              )}
              sx={{
                animationDelay: `${1 + index * 0.6 + 0.5}s`,
              }}
            >
              <Box
                className="absolute pointer-events-none w-full h-full rounded-full transform-gpu"
                sx={{
                  backgroundColor: color,
                  transition: 'all .2s cubic-bezier(.655,0.045,.355,1)',
                  transform: 'matrix(1, 0, 0, 1, 0, 0)',
                  '.group:hover &': {
                    transitionDelay: '.2s',
                    transitionDuration: '.5s',
                    transform: `matrix(${circleScale}, 0, 0, ${circleScale}, ${circleTX}, ${circleTY})`,
                  },
                }}
              />
              <Box
                className="absolute flex-center transition-colors w-full h-full rounded-full"
                component="div"
                dangerouslySetInnerHTML={{ __html: icon }}
                color="white"
                sx={{
                  backgroundColor: color,
                  transitionDuration: '.2s',
                  '.group:hover &': {
                    color: 'text.secondary',
                    backgroundColor: 'white',
                    transitionDelay: '.1s',
                    transitionDuration: '.3s',
                  },
                }}
              />
            </Box>
          </>
          <div
            className={clsx(
              'absolute top-20 left-0 opacity-0',
              index === 0 ? 'text-start' : index === 1 && 'text-end',
              styles.textVisibility
            )}
            style={{
              marginLeft:
                ((groupRef.current?.clientWidth ?? 0) - (titleRef.current?.clientWidth ?? 0)) / 2,
              animationDelay: `${1 + index * 0.6 + 0.8}s`,
            }}
          >
            <Typography
              ref={titleRef}
              className="text-base group-hover:text-white font-semibold mt-2 transition-colors duration-200 group-hover:duration-500"
              color="text.secondary"
              variant="h2"
            >
              {title}
            </Typography>
            {description && (
              <Typography
                className={clsx(
                  'absolute text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-200 group-hover:duration-700 group-hover:delay-200 w-40 mt-1',
                  index === 0 ? 'left-0' : index === 1 && 'right-0'
                )}
                color="white"
              >
                {description}
              </Typography>
            )}
          </div>
        </div>
      </div>
    </Box>
  );
};

export default AnimatedItem;
