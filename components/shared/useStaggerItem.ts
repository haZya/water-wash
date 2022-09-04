import { setStaggerItem } from 'components/shared/store/staggerItemSlice';
import { RootState } from 'lib/redux';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function useStaggerItem(containerName: string, index: number, when: boolean) {
  const dispatch = useDispatch();
  const item = useSelector(
    ({ shared }: RootState) =>
      shared.staggerItem.containers.find((c) => c.name === containerName)?.items[index]
  );
  const prevItem = useSelector(
    ({ shared }: RootState) =>
      shared.staggerItem.containers.find((c) => c.name === containerName)?.items[index - 1]
  );

  const animate =
    item?.animationStarted ||
    item?.animationEnded ||
    !!(
      item?.when &&
      (!prevItem || !prevItem.when || prevItem.animationStarted || prevItem.animationEnded)
    );
<<<<<<< HEAD
=======
  console.log('hit', when);
>>>>>>> 0fdf71a04006e434119e8efaa2ee9eec5d28a2ee

  useEffect(() => {
    dispatch(
      setStaggerItem({
        containerName,
        index,
        when,
      })
    );
  }, [containerName, dispatch, index, when]);

  const handleAnimationStart = () => {
    dispatch(
      setStaggerItem({
        containerName,
        index,
        when,
        animationStarted: true,
        animationEnded: false,
      })
    );
  };

  const handleAnimationEnd = () => {
    dispatch(
      setStaggerItem({
        containerName,
        index,
        when,
        animationStarted: false,
        animationEnded: true,
      })
    );
  };

  return {
    animate,
    handleAnimationStart,
    handleAnimationEnd,
  };
}

export default useStaggerItem;
