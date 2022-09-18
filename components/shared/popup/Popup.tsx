import { Close } from '@mui/icons-material';
import { Backdrop, IconButton, keyframes, styled, useTheme } from '@mui/material';
import clsx from 'clsx';
import { useScrollLock } from 'hooks';
import { RootState } from 'lib/redux';
import { HTMLAttributes, ReactNode, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closePopup, setAnimationEnd } from '../store/popupSlice';

type StyledReactCompareSliderProps = {
  width: number;
  animationEnded: boolean;
};

const zoomIn = (scaleX: number, scaleY: number) =>
  keyframes({
    from: {
      visibility: 'hidden',
    },
    to: {
      top: '50%',
      left: '50%',
      transform: `translate3d(-50%, -50%, 0) scale3d(${scaleX}, ${scaleY}, 1)`,
    },
  });

const zoomOut = (scaleX: number, scaleY: number) =>
  keyframes({
    from: {
      top: '50%',
      left: '50%',
      transform: `translate3d(-50%, -50%, 0) scale3d(${scaleX}, ${scaleY}, 1)`,
    },
    to: {
      visibility: 'hidden',
    },
  });

const StyledPopup = styled('div', {
  shouldForwardProp: (prop) => prop !== 'width' && prop !== 'animationEnded',
})<StyledReactCompareSliderProps>(({ theme, width, animationEnded }) => {
  const xlScale = (theme.breakpoints.values.xl * 0.8) / width;
  const lgScale = (theme.breakpoints.values.lg * 0.8) / width;
  const mdScale = (theme.breakpoints.values.md * 0.8) / width;
  const smScale = (theme.breakpoints.values.sm * 0.8) / width;
  const xsScale = 1;

  return {
    '&.zoom-in': {
      [theme.breakpoints.down('xl')]: {
        animationName: animationEnded ? undefined : `${zoomIn(lgScale, lgScale)}`,
        transform: animationEnded
          ? `translate3d(-50%, -50%, 0) scale3d(${lgScale}, ${lgScale}, 1)`
          : undefined,
      },
      [theme.breakpoints.down('lg')]: {
        animationName: animationEnded ? undefined : `${zoomIn(mdScale, mdScale)}`,
        transform: animationEnded
          ? `translate3d(-50%, -50%, 0) scale3d(${mdScale}, ${mdScale}, 1)`
          : undefined,
      },
      [theme.breakpoints.down('md')]: {
        animationName: animationEnded ? undefined : `${zoomIn(smScale, smScale)}`,
        transform: animationEnded
          ? `translate3d(-50%, -50%, 0) scale3d(${smScale}, ${smScale}, 1)`
          : undefined,
      },
      [theme.breakpoints.down('sm')]: {
        animationName: `${zoomIn(xsScale, xsScale)}`,
        transform: animationEnded
          ? `translate3d(-50%, -50%, 0) scale3d(${xsScale}, ${xsScale}, 1)`
          : undefined,
      },

      animationName: animationEnded ? undefined : `${zoomIn(xlScale, xlScale)}`,
      animationDuration: '0.5s',
      animationFillMode: 'forwards',
      top: animationEnded ? '50%' : undefined,
      left: animationEnded ? '50%' : undefined,
      transform: animationEnded
        ? `translate3d(-50%, -50%, 0) scale3d(${xlScale}, ${xlScale}, 1)`
        : undefined,
    },

    '&.zoom-out': {
      [theme.breakpoints.down('xl')]: {
        animationName: animationEnded ? undefined : `${zoomOut(lgScale, lgScale)}`,
      },
      [theme.breakpoints.down('lg')]: {
        animationName: animationEnded ? undefined : `${zoomOut(mdScale, mdScale)}`,
      },
      [theme.breakpoints.down('md')]: {
        animationName: animationEnded ? undefined : `${zoomOut(smScale, smScale)}`,
      },
      [theme.breakpoints.down('sm')]: {
        animationName: animationEnded ? undefined : `${zoomOut(xsScale, xsScale)}`,
      },

      animationName: animationEnded ? undefined : `${zoomOut(xlScale, xlScale)}`,
      animationDuration: '0.5s',
      animationFillMode: 'forwards',
      visibility: animationEnded ? 'hidden' : undefined,
    },
  };
});

interface IProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

const Popup = (props: IProps) => {
  const dispatch = useDispatch();
  const {
    open,
    rect,
    animationEnded,
    children: popupContent,
  } = useSelector(({ shared }: RootState) => shared.popup);
  const theme = useTheme();
  const { lockScroll, unlockScroll } = useScrollLock();

  useEffect(() => {
    if (open || !animationEnded) lockScroll();
    else unlockScroll();
  }, [open, animationEnded, unlockScroll, lockScroll]);

  const handleClose = () => {
    dispatch(closePopup());
  };

  return (
    <>
      <div {...props} />
      {open != undefined && (
        <>
          <StyledPopup
            className={clsx('!fixed', open ? 'zoom-in' : 'zoom-out')}
            width={rect?.width ?? 1}
            animationEnded={animationEnded}
            sx={{
              width: rect?.width,
              height: rect?.height,
              top: rect?.top,
              left: rect?.left,
              zIndex: theme.zIndex.drawer + 2,
            }}
            onAnimationEnd={() => {
              dispatch(setAnimationEnd());
            }}
          >
            {popupContent}
          </StyledPopup>
          <Backdrop
            className="backdrop-blur-sm"
            open={open}
            onClick={handleClose}
            sx={{ zIndex: theme.zIndex.drawer + 1 }}
          >
            <IconButton
              className="absolute top-2 right-2 text-white"
              aria-label="close"
              size="medium"
              onClick={handleClose}
            >
              <Close fontSize="medium" />
            </IconButton>
          </Backdrop>
        </>
      )}
    </>
  );
};

export default Popup;
