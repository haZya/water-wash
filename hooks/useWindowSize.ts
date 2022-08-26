import { useEffect, useState } from 'react';

// Define general type for useWindowSize hook, which includes width and height
type WindowSize = {
  width: number;
  height: number;
};

function useWindowSize(when: boolean = true): WindowSize {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: 0,
    height: 0,
  });
  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      if (when) {
        console.log('hit');

        // Set window width/height to state
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
    }
    // Add event listener
    window.addEventListener('resize', handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, [when]); // Empty array ensures that effect is only run on mount
  return windowSize;
}

export default useWindowSize;
