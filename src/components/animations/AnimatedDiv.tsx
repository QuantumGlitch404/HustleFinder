
'use client';

import type { ReactNode } from 'react';
import React, { useRef, useState, useEffect, useMemo } from 'react';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { cn } from '@/lib/utils';

interface AnimatedDivProps {
  children: ReactNode;
  className?: string;
  animationClasses?: string; // e.g., "fade-in slide-in-from-bottom-4"
  durationClass?: string;   // e.g., "duration-500" (for animate-in effects)
  delayClass?: string;      // e.g., "delay-200"
  once?: boolean; // If true, animates only once. If false, animates every time it enters viewport.
  observerOptions?: IntersectionObserverInit;
  threshold?: number; // Shortcut for observerOptions.threshold
}

const AnimatedDiv = ({
  children,
  className,
  animationClasses = 'fade-in slide-in-from-bottom-8',
  durationClass = 'duration-700', 
  delayClass = '',
  once = false, // Default changed to false to allow re-animation
  observerOptions,
  threshold = 0.1, 
}: AnimatedDivProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  
  const currentObserverOptions = useMemo(() => ({
    threshold,
    ...observerOptions,
  }), [threshold, observerOptions]);

  const entry = useIntersectionObserver(ref, currentObserverOptions);
  const isVisible = !!entry?.isIntersecting;
  
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isVisible && once && !hasAnimated) {
      // If 'once' is true, set hasAnimated to true so it doesn't animate again.
      setHasAnimated(true);
    }
    // If 'once' is false, hasAnimated state is not used for 'show' logic,
    // and animations can re-trigger based on 'isVisible'.
    // hasAnimated is not reset when isVisible becomes false, which is correct for 'once=true' logic.
  }, [isVisible, once, hasAnimated]);

  // If 'once' is true, 'show' is true if 'hasAnimated' is true (meaning it has animated at least once).
  // If 'once' is false, 'show' is true only if 'isVisible' is currently true.
  const show = once ? hasAnimated : isVisible;

  return (
    <div
      ref={ref}
      className={cn(
        // Initial state for animation (hidden)
        'opacity-0', 
        // Apply animation classes when 'show' is true
        // For 'once=false', 'show' toggles with 'isVisible', re-applying animation classes.
        // For 'once=true', 'show' becomes true after first animation and stays true, keeping it visible.
        show && `animate-in ${animationClasses} ${durationClass} ${delayClass} opacity-100`,
        className
      )}
    >
      {children}
    </div>
  );
};

export default AnimatedDiv;
