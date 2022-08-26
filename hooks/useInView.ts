import { RefObject, useEffect, useRef, useState } from 'react';

function useInView<T extends Element>(rootMargin: string = '0px'): [RefObject<T>, boolean] {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState<boolean>(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let intersectingTimeout: NodeJS.Timeout;

    const observer = new IntersectionObserver(
      ([entry]) => {
        clearTimeout(intersectingTimeout);

        // Update our state when observer callback fires
        intersectingTimeout = setTimeout(() => setInView(entry.isIntersecting), 150);
      },
      {
        rootMargin,
      }
    );

    observer.observe(el);
    return () => {
      observer.unobserve(el);
    };
  }, [ref, rootMargin]);
  return [ref, inView];
}

export default useInView;
