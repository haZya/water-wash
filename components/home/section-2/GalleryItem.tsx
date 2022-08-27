import { Backdrop, Box, styled, useMediaQuery, useTheme } from '@mui/material';
import clsx from 'clsx';
import { Image } from 'components/shared';
import { useInView, useScrolling, useWindowSize } from 'hooks';
import { ISection2Item } from 'models/home';
import { useEffect, useLayoutEffect, useState } from 'react';
import { ReactCompareSlider, ReactCompareSliderHandle } from 'react-compare-slider';
import Tilt from 'react-parallax-tilt';
import { useDispatch } from 'react-redux';
import { setSection2ItemState } from '../store/contentSlice';
import styles from './GalleryItem.module.css';

interface IProps extends ISection2Item {
  index: number;
  prevItem: ISection2Item;
}

type StyledReactCompareSliderProps = {
  scaleX: number;
  scaleY: number;
};

const Popup = styled('div', {
  shouldForwardProp: (prop) => prop !== 'scaleX' && prop !== 'scaleY',
})<StyledReactCompareSliderProps>(({ scaleX, scaleY }) => ({
  '@keyframes zoom-in': {
    from: {
      visibility: 'hidden',
    },
    to: {
      top: '50%',
      left: '50%',
      transform: `translate3d(-50%, -50%, 0) scale3d(${scaleX}, ${scaleY}, 1)`,
    },
  },
  '@keyframes zoom-out': {
    from: {
      top: '50%',
      left: '50%',
      transform: `translate3d(-50%, -50%, 0) scale3d(${scaleX}, ${scaleY}, 1)`,
    },
    to: {
      visibility: 'hidden',
    },
  },

  '&.zoom-in': {
    animationName: 'zoom-in',
    animationDuration: '0.5s',
    animationFillMode: 'forwards',
  },

  '&.zoom-out': {
    animationName: 'zoom-out',
    animationDuration: '0.5s',
    animationFillMode: 'forwards',
  },
}));

const GalleryItem = ({
  index,
  animationStarted,
  animationEnded,
  prevItem,
  image1,
  image2,
  portrait,
}: IProps) => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));
  const [ref, inView] = useInView<HTMLDivElement>('30px 0px 0px 0px');
  const { width } = useWindowSize();
  const scrolling = useScrolling(inView);

  const [rect, setRect] = useState<DOMRect>();
  const [open, setOpen] = useState<boolean>();
  const [position, setPosition] = useState(50);

  useLayoutEffect(() => {
    if (!scrolling && animationEnded) {
      setRect(ref.current?.getBoundingClientRect());
    }
  }, [ref, scrolling, animationEnded]);

  const toggleOpen = () => {
    setOpen(!open);
  };

  useLayoutEffect(() => {
    if (open) {
      const scrollBarCompensation = window.innerWidth - document.body.offsetWidth;
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = `${scrollBarCompensation}px`;
    } else {
      document.body.style.overflow = 'auto';
      document.body.style.paddingRight = '';
    }
  }, [open]);

  useEffect(() => {
    dispatch(
      setSection2ItemState({
        index,
        inView,
        animationStarted,
        animationEnded: !inView ? false : animationEnded,
      })
    );
  }, [animationEnded, animationStarted, dispatch, inView, index]);

  return (
    <>
      <Box
        ref={ref}
        className={clsx(
          'translate-y-0 opacity-0 invisible w-full aspect-video',
          (animationStarted ||
            animationEnded ||
            (inView &&
              (!prevItem ||
                !prevItem.inView ||
                prevItem.animationStarted ||
                prevItem.animationEnded))) &&
            styles.slideUp
        )}
        component="div"
        sx={{
          animationDelay: `${0.1}s`,
        }}
        onAnimationStart={() => {
          dispatch(
            setSection2ItemState({ index, inView, animationStarted: true, animationEnded: false })
          );
        }}
        onAnimationEnd={() => {
          dispatch(
            setSection2ItemState({
              index,
              inView,
              animationStarted: false,
              animationEnded: true,
            })
          );
        }}
      >
        <Tilt
          className="w-full h-full"
          scale={smDown ? 1 : 1.06}
          tiltMaxAngleX={15}
          tiltMaxAngleY={15}
          tiltReverse
          glareEnable
          glarePosition="all"
          glareMaxOpacity={0.3}
        >
          <ReactCompareSlider
            className="w-full h-full"
            onlyHandleDraggable
            portrait={portrait}
            itemOne={<Image src={image1} alt="Image One" layout="fill" />}
            itemTwo={<Image src={image2} alt="Image two" layout="fill" />}
            position={position}
            onPositionChange={(pos) => {
              setPosition(pos);
            }}
            onClick={toggleOpen}
            handle={
              <div
                className="w-full h-full"
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
                <ReactCompareSliderHandle portrait={portrait} />
              </div>
            }
          />
        </Tilt>
      </Box>
      {open != undefined && (
        <>
          <Popup
            className={clsx('!fixed', open ? 'zoom-in' : 'zoom-out')}
            scaleX={(width * 0.85) / (rect?.width ?? 1)}
            scaleY={(width * 0.85) / (rect?.width ?? 1)}
            style={{
              width: rect?.width,
              height: rect?.height,
              top: rect?.top,
              left: rect?.left,
              zIndex: theme.zIndex.drawer + 2,
            }}
          >
            <ReactCompareSlider
              className="w-full h-full"
              portrait={portrait}
              itemOne={<Image src={image1} alt="Image One" layout="fill" />}
              itemTwo={<Image src={image2} alt="Image two" layout="fill" />}
              position={position}
              onPositionChange={(pos) => {
                setPosition(pos);
              }}
            />
          </Popup>
          <Backdrop
            className="backdrop-blur-sm"
            open={open}
            onClick={toggleOpen}
            sx={{ zIndex: theme.zIndex.drawer + 1 }}
          />
        </>
      )}
    </>
  );
};

export default GalleryItem;
