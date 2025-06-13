
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
  once?: boolean;
  observerOptions?: IntersectionObserverInit;
  threshold?: number; // Shortcut for observerOptions.threshold
}

const AnimatedDiv = ({
  children,
  className,
  animationClasses = 'fade-in slide-in-from-bottom-8',
  durationClass = 'duration-700', // Default duration for animate-in
  delayClass = '',
  once = true,
  observerOptions,
  threshold = 0.1, // Default threshold
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
    if (isVisible && !hasAnimated) {
      if (once) {
        setHasAnimated(true);
      }
    }
  }, [isVisible, once, hasAnimated]);

  const show = once ? hasAnimated : isVisible;

  return (
    <div
      ref={ref}
      className={cn(
        // Initial state for animation
        'opacity-0', 
        // Apply animation classes when 'show' is true
        show && `animate-in ${animationClasses} ${durationClass} ${delayClass} opacity-100`,
        className
      )}
    >
      {children}
    </div>
  );
};

export default AnimatedDiv;
