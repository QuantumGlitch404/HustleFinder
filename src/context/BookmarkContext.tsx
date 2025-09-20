"use client";

import type { Hustle } from '@/types/hustle';
import React, { createContext, useContext, useState, useEffect, type ReactNode, useCallback } from 'react';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from './AuthContext';
import { db } from '@/lib/firebase';
import { doc, getDoc, setDoc, updateDoc, arrayUnion, arrayRemove } from 'firebase/firestore';

interface BookmarkContextType {
  bookmarkedIds: string[];
  addBookmark: (id: string) => void;
  removeBookmark: (id: string) => void;
  isBookmarked: (id: string) => boolean;
  getBookmarkedHustles: (allHustles: Hustle[]) => Hustle[];
  loading: boolean;
}

const BookmarkContext = createContext<BookmarkContextType | undefined>(undefined);

const LOCAL_STORAGE_KEY = 'bookmarkedHustleIds_guest';

export const BookmarkProvider = ({ children }: { children: ReactNode }) => {
  const { toast } = useToast();
  const { user, loading: authLoading } = useAuth();
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initializeBookmarks = async () => {
      setLoading(true);

      // Wait until Firebase auth state is resolved
      if (authLoading) return;

      if (user) {
        // User is logged in, fetch from Firestore
        const userBookmarksRef = doc(db, 'bookmarks', user.uid);
        try {
          const docSnap = await getDoc(userBookmarksRef);
          if (docSnap.exists()) {
            setBookmarkedIds(docSnap.data().hustleIds || []);
          } else {
            setBookmarkedIds([]); // No bookmarks document yet
          }
        } catch (error) {
          console.error("Error fetching Firestore bookmarks:", error);
          setBookmarkedIds([]); // Fallback to empty on error
          toast({
            title: "Could not load bookmarks",
            description: "There was an issue fetching your saved hustles.",
            variant: "destructive"
          });
        }
      } else {
        // User is a guest, fetch from localStorage
        try {
          const storedIds = localStorage.getItem(LOCAL_STORAGE_KEY);
          if (storedIds) {
            setBookmarkedIds(JSON.parse(storedIds));
          } else {
            setBookmarkedIds([]);
          }
        } catch (error) {
          console.error("Failed to parse bookmarks from localStorage", error);
          setBookmarkedIds([]);
        }
      }
      setLoading(false);
    };

    initializeBookmarks();
  }, [user, authLoading, toast]);


  const addBookmark = useCallback(async (id: string) => {
    if (user) {
      // Logged-in user
      const userBookmarksRef = doc(db, 'bookmarks', user.uid);
      try {
          await updateDoc(userBookmarksRef, {
            hustleIds: arrayUnion(id)
          });
          toast({ title: "Hustle Saved!", description: "It's saved to your account." });
        } catch (err: any) {
          // If the document doesn't exist, create it
          if (err.code === 'not-found') {
            await setDoc(userBookmarksRef, { hustleIds: [id] });
            toast({ title: "Hustle Saved!", description: "Your saved list has been created." });
          } else {
             console.error("Firebase Error adding bookmark:", err);
             toast({ title: "Save Failed", description: "Could not save hustle to your account.", variant: 'destructive'});
             return; // Exit if firebase fails
          }
      }
      setBookmarkedIds(prev => [...new Set([...prev, id])]);
    } else {
      // Guest user
      setBookmarkedIds((prevIds) => {
        const newIds = [...new Set([...prevIds, id])];
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newIds));
        toast({ title: "Hustle Saved!", description: "Log in to save your hustles across devices." });
        return newIds;
      });
    }
  }, [user, toast]);

  const removeBookmark = useCallback(async (id: string) => {
     if (user) {
        const userBookmarksRef = doc(db, 'bookmarks', user.uid);
        try {
            await updateDoc(userBookmarksRef, {
                hustleIds: arrayRemove(id)
            });
            toast({ title: "Removed from Saved", description: "Hustle removed from your account." });
        } catch(err) {
            console.error("Firebase Error removing bookmark:", err);
            toast({ title: "Remove Failed", description: "Could not remove hustle from your account.", variant: 'destructive'});
            return; // Exit if firebase fails
        }
        setBookmarkedIds(prev => prev.filter(bookmarkId => bookmarkId !== id));
    } else {
        setBookmarkedIds((prevIds) => {
          const newIds = prevIds.filter((bookmarkId) => bookmarkId !== id);
          localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newIds));
          toast({ title: "Removed from Saved", description: "Hustle removed from your guest list." });
          return newIds;
        });
    }
  }, [user, toast]);

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