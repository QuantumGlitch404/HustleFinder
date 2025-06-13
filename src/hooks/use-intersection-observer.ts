
'use client';

import { useEffect, useState, type RefObject, useMemo } from 'react';

export function useIntersectionObserver(
  elementRef: RefObject<Element>,
  options?: IntersectionObserverInit
): IntersectionObserverEntry | undefined {
  const [entry, setEntry] = useState<IntersectionObserverEntry>();

  // Use useMemo to stabilize the options object if it's passed inline
  const memoizedOptions = useMemo(() => options, [JSON.stringify(options)]);

  useEffect(() => {
    const node = elementRef?.current; // Assign to variable before using in deps
    const hasIOSupport = !!window.IntersectionObserver;

    if (!hasIOSupport || !node) return;

    const observer = new IntersectionObserver(([entry]) => {
      setEntry(entry);
    }, memoizedOptions);

    observer.observe(node);

    return () => observer.disconnect();
  }, [elementRef, memoizedOptions]); // Use memoizedOptions in dependency array

  return entry;
}
