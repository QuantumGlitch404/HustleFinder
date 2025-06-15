
"use client";

import type { Hustle } from '@/types/hustle';
import React, { createContext, useContext, useState, useEffect, type ReactNode } from 'react';

interface BookmarkContextType {
  bookmarkedIds: string[];
  addBookmark: (id: string) => void;
  removeBookmark: (id: string) => void;
  isBookmarked: (id: string) => boolean;
  getBookmarkedHustles: (allHustles: Hustle[]) => Hustle[];
}

const BookmarkContext = createContext<BookmarkContextType | undefined>(undefined);

const LOCAL_STORAGE_KEY = 'bookmarkedHustleIds';

export const BookmarkProvider = ({ children }: { children: ReactNode }) => {
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>(() => {
    if (typeof window !== 'undefined') {
      const storedIds = localStorage.getItem(LOCAL_STORAGE_KEY);
      return storedIds ? JSON.parse(storedIds) : [];
    }
    return [];
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(bookmarkedIds));
    }
  }, [bookmarkedIds]);

  const addBookmark = (id: string) => {
    setBookmarkedIds((prevIds) => {
      if (!prevIds.includes(id)) {
        return [...prevIds, id];
      }
      return prevIds;
    });
  };

  const removeBookmark = (id: string) => {
    setBookmarkedIds((prevIds) => prevIds.filter((bookmarkId) => bookmarkId !== id));
  };

  const isBookmarked = (id: string) => {
    return bookmarkedIds.includes(id);
  };

  const getBookmarkedHustles = (allHustles: Hustle[]): Hustle[] => {
    return allHustles.filter(hustle => bookmarkedIds.includes(hustle.id));
  };
  

  return (
    <BookmarkContext.Provider value={{ bookmarkedIds, addBookmark, removeBookmark, isBookmarked, getBookmarkedHustles }}>
      {children}
    </BookmarkContext.Provider>
  );
};

export const useBookmarks = () => {
  const context = useContext(BookmarkContext);
  if (context === undefined) {
    throw new Error('useBookmarks must be used within a BookmarkProvider');
  }
  return context;
};
