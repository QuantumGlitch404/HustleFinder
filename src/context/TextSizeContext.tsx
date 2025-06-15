
'use client';

import React, { createContext, useContext, useState, useEffect, type ReactNode, useCallback } from 'react';

type TextSizeType = 'text-sm' | 'text-base' | 'text-lg';
const textSizes: TextSizeType[] = ['text-sm', 'text-base', 'text-lg'];
const LOCAL_STORAGE_KEY_TEXT_SIZE = 'hustleFinderTextSize';

interface TextSizeContextType {
  currentSizeClass: TextSizeType;
  cycleTextSize: () => void;
  setTextSizeClass: (size: TextSizeType) => void;
  isMounted: boolean; // Added to indicate client-side readiness
}

const TextSizeContext = createContext<TextSizeContextType | undefined>(undefined);

export const TextSizeProvider = ({ children }: { children: ReactNode }) => {
  const [currentSizeClass, setCurrentSizeClass] = useState<TextSizeType>('text-base');
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // This effect runs only on the client, after the initial render.
    setIsMounted(true);
    const storedSize = localStorage.getItem(LOCAL_STORAGE_KEY_TEXT_SIZE) as TextSizeType | null;
    if (storedSize && textSizes.includes(storedSize)) {
      setCurrentSizeClass(storedSize); // This will trigger a re-render based on localStorage
    }
    // If no stored size, it defaults to 'text-base' as initialized.
  }, []); // Empty dependency array means it runs once on mount.

  useEffect(() => {
    // This effect applies the class to the body and updates localStorage.
    // It should only run client-side and after isMounted is true.
    if (isMounted) {
      document.body.classList.remove(...textSizes);
      document.body.classList.add(currentSizeClass);
      localStorage.setItem(LOCAL_STORAGE_KEY_TEXT_SIZE, currentSizeClass);
    }
  }, [currentSizeClass, isMounted]);

  const cycleTextSize = useCallback(() => {
    if (!isMounted) return; // Prevent cycling if not mounted
    setCurrentSizeClass(prevSize => {
      const currentIndex = textSizes.indexOf(prevSize);
      const nextIndex = (currentIndex + 1) % textSizes.length;
      return textSizes[nextIndex];
    });
  }, [isMounted]);

  const setTextSizeClassDirectly = useCallback((size: TextSizeType) => {
    if (!isMounted) return; // Prevent setting if not mounted
    if (textSizes.includes(size)) {
        setCurrentSizeClass(size);
    }
  }, [isMounted]);

  return (
    <TextSizeContext.Provider value={{ currentSizeClass, cycleTextSize, setTextSizeClass: setTextSizeClassDirectly, isMounted }}>
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

