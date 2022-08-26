import { useWindowSize } from 'hooks';
import { useEffect, useState } from 'react';

const useScrolling = (when: boolean = true): boolean => {
  const sizes = useWindowSize(when);
  const [scrolling, setScrolling] = useState<boolean>(false);

  useEffect(() => {
    let scrollingTimeout: NodeJS.Timeout;

    const handleScrollEnd = () => {
      setScrolling(false);
    };

    const handleScroll = () => {
      clearTimeout(scrollingTimeout);

      if (when) {
        setScrolling(true);
        scrollingTimeout = setTimeout(() => handleScrollEnd(), 150);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [when, sizes]);

  return scrolling;
};

export default useScrolling;
