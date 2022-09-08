import { Box, useMediaQuery, useTheme } from '@mui/material';
import clsx from 'clsx';
import { Image, useStaggerItem } from 'components/shared';
import { PopupItem } from 'components/shared/popup';
import { useInView } from 'hooks';
import { IGallerySectionItem } from 'models/home';
import { useEffect, useState } from 'react';
import { ReactCompareSlider, ReactCompareSliderHandle } from 'react-compare-slider';
import Tilt from 'react-parallax-tilt';
import styles from './GalleryItem.module.css';

interface IProps extends IGallerySectionItem {
  index: number;
}

const GalleryItem = ({ index, image1, image2, portrait }: IProps) => {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));
  const [animating, setAnimating] = useState(false);
  const [ref, inView] = useInView({ threshold: !animating ? 0.3 : undefined });

  const { animate, handleAnimationStart, handleAnimationEnd } = useStaggerItem(
    'gallery',
    index,
    inView
  );

  useEffect(() => {
    setAnimating(animate);
  }, [animate]);

  const [compareSliderPosition, setCompareSliderPosition] = useState(50);

  return (
    <>
      <Box
        ref={ref}
        className={clsx(
          'opacity-0 invisible w-full aspect-video cursor-pointer',
          animate && styles.slideUp
        )}
        component="div"
        onAnimationStart={handleAnimationStart}
        onTransitionEnd={handleAnimationEnd}
        sx={{
          animationDelay: `${0.1}s`,
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
          <PopupItem
            customRender={
              <ReactCompareSlider
                className="w-full h-full"
                portrait={portrait}
                itemOne={<Image src={image1} alt="Image One" layout="fill" />}
                itemTwo={<Image src={image2} alt="Image two" layout="fill" />}
                position={compareSliderPosition}
                onPositionChange={(pos) => {
                  setCompareSliderPosition(pos);
                }}
              />
            }
          >
            {({ ref }) => (
              <div ref={ref} className="w-full h-full">
                <ReactCompareSlider
                  className="w-full h-full"
                  onlyHandleDraggable
                  portrait={portrait}
                  itemOne={<Image src={image1} alt="Image One" layout="fill" />}
                  itemTwo={<Image src={image2} alt="Image two" layout="fill" />}
                  position={compareSliderPosition}
                  onPositionChange={(pos) => {
                    setCompareSliderPosition(pos);
                  }}
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
              </div>
            )}
          </PopupItem>
        </Tilt>
      </Box>
    </>
  );
};

export default GalleryItem;
