import { Ref, useEffect, useRef, useState } from 'react';

function useInView<T extends HTMLElement>(options?: IntersectionObserverInit): [Ref<T>, boolean] {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState<boolean>(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(([entry]) => {
      // Update our state when observer callback fires
      setInView(entry.isIntersecting);
    }, options);

    observer.observe(el);
    return () => {
      observer.unobserve(el);
    };
  }, [options, ref]);
  return [ref, inView];
}

export default useInView;
