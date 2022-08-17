import { Player } from '@lottiefiles/react-lottie-player';
import { Box, Typography, useTheme } from '@mui/material';
import clsx from 'clsx';
import { useWindowSize } from 'hooks';
import { IAnimatedItem } from 'models/home';
import { useMemo, useRef } from 'react';

type CircleTranslate = {
  circleTX: number;
  circleTY: number;
};

const AnimatedItem = ({ index = -1, lottie, icon, title, description, color }: IAnimatedItem) => {
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
    <div
      className={clsx(
        'absolute-center w-72 lg:w-96 h-auto',
        index === 0 ? 'top-1/4 left-3/4' : index === 1 && 'top-3/4 left-1/4'
      )}
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
          <Box
            component="span"
            className="absolute top-0 left-0 w-full h-full rounded-full ping-animation border-2 opacity-40"
            sx={{ borderColor: color }}
          />
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
          <div
            className={clsx(
              'absolute top-20 left-0',
              index === 0 ? 'text-start' : index === 1 && 'text-end'
            )}
            style={{
              marginLeft:
                ((groupRef.current?.clientWidth ?? 0) - (titleRef.current?.clientWidth ?? 0)) / 2,
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
            <Typography
              className={clsx(
                'absolute text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-200 group-hover:duration-700 group-hover:delay-200 w-40 mt-1',
                index === 0 ? 'left-0' : index === 1 && 'right-0'
              )}
              color="white"
            >
              {description}
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedItem;
