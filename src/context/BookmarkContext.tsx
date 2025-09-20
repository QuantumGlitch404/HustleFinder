
"use client";

import type { Hustle } from '@/types/hustle';
import React, { createContext, useContext, useState, useEffect, type ReactNode, useCallback } from 'react';
import { useToast } from '@/hooks/use-toast';
import { db, auth } from '@/lib/firebase';
import { doc, getDoc, setDoc, updateDoc, arrayUnion, arrayRemove } from 'firebase/firestore';
import { onAuthStateChanged, type User } from 'firebase/auth';

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
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [authChecked, setAuthChecked] = useState(false);

  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
          setCurrentUser(user);
          setAuthChecked(true);
      });
      return () => unsubscribe();
  }, []);

  useEffect(() => {
    const initializeBookmarks = async () => {
      if (!authChecked) return;
      
      setLoading(true);

      if (currentUser) {
        const userBookmarksRef = doc(db, 'bookmarks', currentUser.uid);
        try {
          const docSnap = await getDoc(userBookmarksRef);
          if (docSnap.exists()) {
            setBookmarkedIds(docSnap.data().hustleIds || []);
          } else {
            // No existing bookmarks in firestore, start fresh for this user
            setBookmarkedIds([]);
          }
        } catch (error) {
          console.error("Error fetching Firestore bookmarks:", error);
          toast({
            title: "Could not load bookmarks",
            description: "There was an issue fetching your saved hustles.",
            variant: "destructive"
          });
        }
      } else {
        // User is logged out, use local storage
        try {
          const storedIds = localStorage.getItem(LOCAL_STORAGE_KEY);
          setBookmarkedIds(storedIds ? JSON.parse(storedIds) : []);
        } catch (error) {
          console.error("Failed to parse bookmarks from localStorage", error);
          setBookmarkedIds([]);
        }
      }
      setLoading(false);
    };

    initializeBookmarks();
  }, [currentUser, authChecked, toast]);


  const addBookmark = useCallback(async (id: string) => {
    if (bookmarkedIds.includes(id)) return;

    const newIds = [...bookmarkedIds, id];
    setBookmarkedIds(newIds);

    if (currentUser) {
      const userBookmarksRef = doc(db, 'bookmarks', currentUser.uid);
      try {
          // Using set with merge is safer for initialization
          await setDoc(userBookmarksRef, { hustleIds: arrayUnion(id) }, { merge: true });
          toast({ title: "Hustle Saved!", description: "It's saved to your account." });
      } catch (err: any) {
         console.error("Firebase Error adding bookmark:", err);
         toast({ title: "Save Failed", description: "Could not save hustle to your account.", variant: 'destructive'});
         // Revert state on failure
         setBookmarkedIds(prev => prev.filter(bookmarkId => bookmarkId !== id));
      }
    } else {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newIds));
      toast({ title: "Hustle Saved!", description: "Log in to save your hustles across devices." });
    }
  }, [currentUser, bookmarkedIds, toast]);

  const removeBookmark = useCallback(async (id: string) => {
     const newIds = bookmarkedIds.filter((bookmarkId) => bookmarkId !== id);
     setBookmarkedIds(newIds);
     
     if (currentUser) {
        const userBookmarksRef = doc(db, 'bookmarks', currentUser.uid);
        try {
            await updateDoc(userBookmarksRef, {
                hustleIds: arrayRemove(id)
            });
            toast({ title: "Removed from Saved", description: "Hustle removed from your account." });
        } catch(err) {
            console.error("Firebase Error removing bookmark:", err);
            toast({ title: "Remove Failed", description: "Could not remove hustle from your account.", variant: 'destructive'});
            // Revert state on failure
            setBookmarkedIds(prev => [...prev, id]);
        }
    } else {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newIds));
        toast({ title: "Removed from Saved", description: "Hustle removed from your guest list." });
    }
  }, [currentUser, bookmarkedIds, toast]);

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
