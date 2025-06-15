
'use client';

import React, { createContext, useContext, useState, useEffect, type ReactNode, useCallback } from 'react';

type TextSizeType = 'text-sm' | 'text-base' | 'text-lg';
const textSizes: TextSizeType[] = ['text-sm', 'text-base', 'text-lg'];
const LOCAL_STORAGE_KEY_TEXT_SIZE = 'hustleFinderTextSize';

interface TextSizeContextType {
  currentSizeClass: TextSizeType;
  cycleTextSize: () => void;
  setTextSizeClass: (size: TextSizeType) => void;
}

const TextSizeContext = createContext<TextSizeContextType | undefined>(undefined);

export const TextSizeProvider = ({ children }: { children: ReactNode }) => {
  const [currentSizeClass, setCurrentSizeClass] = useState<TextSizeType>('text-base');
  const [isMounted, setIsMounted] = useState(false);


  useEffect(() => {
    setIsMounted(true);
    if (typeof window !== 'undefined') {
      const storedSize = localStorage.getItem(LOCAL_STORAGE_KEY_TEXT_SIZE) as TextSizeType | null;
      if (storedSize && textSizes.includes(storedSize)) {
        setCurrentSizeClass(storedSize);
        // Apply initial size to body directly
        document.body.classList.remove(...textSizes);
        document.body.classList.add(storedSize);
      } else {
        // Ensure default 'text-base' is applied if nothing is stored
        document.body.classList.remove(...textSizes.filter(s => s !== 'text-base'));
        if (!document.body.classList.contains('text-base')) {
             document.body.classList.add('text-base');
        }
      }
    }
  }, []);

  useEffect(() => {
    if (isMounted && typeof window !== 'undefined') {
      document.body.classList.remove(...textSizes);
      document.body.classList.add(currentSizeClass);
      localStorage.setItem(LOCAL_STORAGE_KEY_TEXT_SIZE, currentSizeClass);
    }
  }, [currentSizeClass, isMounted]);

  const cycleTextSize = useCallback(() => {
    setCurrentSizeClass(prevSize => {
      const currentIndex = textSizes.indexOf(prevSize);
      const nextIndex = (currentIndex + 1) % textSizes.length;
      return textSizes[nextIndex];
    });
  }, []);

  const setTextSizeClassDirectly = (size: TextSizeType) => {
    if (textSizes.includes(size)) {
        setCurrentSizeClass(size);
    }
  }

  if (!isMounted) {
     // Avoid rendering children until client-side hydration is complete to prevent mismatches
     // You could return null or a loading spinner, but for body class manipulation,
     // it's often better to ensure it's client-side only.
     // Applying to body in the first useEffect for initial load.
  }


  return (
    <TextSizeContext.Provider value={{ currentSizeClass, cycleTextSize, setTextSizeClass: setTextSizeClassDirectly }}>
      {children}
    </TextSizeContext.Provider>
  );
};

export const useTextSize = () => {
  const context = useContext(TextSizeContext);
  if (context === undefined) {
    throw new Error('useTextSize must be used within a TextSizeProvider');
  }
  return context;
};
