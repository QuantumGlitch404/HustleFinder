
"use client";

import type { Hustle } from '@/types/hustle';
import React, { createContext, useContext, useState, useEffect, type ReactNode, useCallback } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Loader2 } from 'lucide-react';

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
    setLoading(true);
    try {
      const storedIds = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (storedIds) {
        setBookmarkedIds(JSON.parse(storedIds));
      }
    } catch (error) {
      console.error("Failed to parse bookmarks from localStorage", error);
      setBookmarkedIds([]);
    }
    setLoading(false);
  }, []);

  const addBookmark = useCallback((id: string) => {
    setBookmarkedIds(prevIds => {
      if (prevIds.includes(id)) {
        return prevIds;
      }
      
      const newIds = [...prevIds, id];
      try {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newIds));
        // Move toast call here to ensure it runs as a side effect
        toast({ title: "Hustle Saved!" });
      } catch (error) {
        console.error("Failed to save bookmark to localStorage", error);
        toast({ title: "Save Failed", description: "Could not save hustle.", variant: 'destructive' });
        return prevIds; // Revert state on failure
      }
      return newIds;
    });
  }, [toast]);

  const removeBookmark = useCallback((id: string) => {
    setBookmarkedIds(prevIds => {
      if (!prevIds.includes(id)) {
          return prevIds;
      }
      
      const newIds = prevIds.filter((bookmarkId) => bookmarkId !== id);
      try {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newIds));
        // Move toast call here to ensure it runs as a side effect
        toast({ title: "Removed from Saved" });
      } catch (error) {
        console.error("Failed to remove bookmark from localStorage", error);
        toast({ title: "Remove Failed", description: "Could not remove hustle.", variant: 'destructive' });
        return prevIds; // Revert state on failure
      }
      return newIds;
    });
  }, [toast]);

  const isBookmarked = useCallback((id: string) => {
    return bookmarkedIds.includes(id);
  }, [bookmarkedIds]);

  const getBookmarkedHustles = useCallback((allHustles: Hustle[]): Hustle[] => {
    return allHustles.filter(hustle => bookmarkedIds.includes(hustle.id));
  }, [bookmarkedIds]);

  if (loading) {
    return (
     <div className="fixed inset-0 bg-background z-[99999] flex flex-col items-center justify-center text-center p-6">
       <Loader2 className="h-12 w-12 animate-spin text-primary mb-4" />
       <p className="text-lg text-foreground">Loading Saved Hustles...</p>
     </div>
   );
  }

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
