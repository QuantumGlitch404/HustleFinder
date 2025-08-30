
"use client";

import type { Hustle } from '@/types/hustle';
import React, { createContext, useContext, useState, useEffect, type ReactNode, useCallback } from 'react';
import { useToast } from '@/hooks/use-toast';

interface BookmarkContextType {
  bookmarkedIds: string[];
  addBookmark: (id: string) => void;
  removeBookmark: (id: string) => void;
  isBookmarked: (id: string) => boolean;
  getBookmarkedHustles: (allHustles: Hustle[]) => Hustle[];
  loading: boolean;
}

const BookmarkContext = createContext<BookmarkContextType | undefined>(undefined);

const LOCAL_STORAGE_KEY = 'bookmarkedHustleIds';

export const BookmarkProvider = ({ children }: { children: ReactNode }) => {
  const { toast } = useToast();
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      const storedIds = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (storedIds) {
        setBookmarkedIds(JSON.parse(storedIds));
      }
    } catch (error) {
      console.error("Failed to parse bookmarks from localStorage", error);
      toast({
        title: "Could not load saved hustles",
        description: "There was an error reading your saved items from this browser.",
        variant: "destructive",
      });
    }
    setLoading(false);
  }, [toast]);

  const addBookmark = useCallback((id: string) => {
    setBookmarkedIds((prevIds) => {
      const newIds = [...new Set([...prevIds, id])];
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newIds));
      return newIds;
    });
  }, []);

  const removeBookmark = useCallback((id: string) => {
    setBookmarkedIds((prevIds) => {
      const newIds = prevIds.filter((bookmarkId) => bookmarkId !== id);
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newIds));
      return newIds;
    });
  }, []);
  
  const isBookmarked = useCallback((id: string) => {
    return bookmarkedIds.includes(id);
  }, [bookmarkedIds]);

  const getBookmarkedHustles = useCallback((allHustles: Hustle[]): Hustle[] => {
    return allHustles.filter(hustle => bookmarkedIds.includes(hustle.id));
  }, [bookmarkedIds]);
  

  return (
    <BookmarkContext.Provider value={{ bookmarkedIds, addBookmark, removeBookmark, isBookmarked, getBookmarkedHustles, loading }}>
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
