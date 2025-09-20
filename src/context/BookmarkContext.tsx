"use client";

import type { Hustle } from '@/types/hustle';
import React, { createContext, useContext, useState, useEffect, type ReactNode, useCallback } from 'react';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from './AuthContext'; // We'll get user from here, but carefully
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
  isReady: boolean; // New state to signal when initial load is complete
}

const BookmarkContext = createContext<BookmarkContextType | undefined>(undefined);

const LOCAL_STORAGE_KEY = 'bookmarkedHustleIds_guest';

export const BookmarkProvider = ({ children }: { children: ReactNode }) => {
  const { toast } = useToast();
  // We'll manage our own user state here to break circular dependency
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [authChecked, setAuthChecked] = useState(false);

  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [isReady, setIsReady] = useState(false); // New ready state

  useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
          setCurrentUser(user);
          setAuthChecked(true);
      });
      return () => unsubscribe();
  }, []);

  useEffect(() => {
    const initializeBookmarks = async () => {
      if (!authChecked) return; // Wait until Firebase auth state is checked
      
      setLoading(true);

      if (currentUser) {
        // User is logged in, fetch from Firestore
        const userBookmarksRef = doc(db, 'bookmarks', currentUser.uid);
        try {
          const docSnap = await getDoc(userBookmarksRef);
          if (docSnap.exists()) {
            setBookmarkedIds(docSnap.data().hustleIds || []);
          } else {
            // If user has local bookmarks, merge them to firestore
            const storedIds = localStorage.getItem(LOCAL_STORAGE_KEY);
            if(storedIds) {
                const localBookmarks = JSON.parse(storedIds);
                if (localBookmarks.length > 0) {
                  await setDoc(userBookmarksRef, { hustleIds: localBookmarks });
                  setBookmarkedIds(localBookmarks);
                  localStorage.removeItem(LOCAL_STORAGE_KEY); // Clear local after merging
                } else {
                  setBookmarkedIds([]);
                }
            } else {
               setBookmarkedIds([]); // No bookmarks document yet
            }
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
        // User is a guest, fetch from localStorage
        try {
          const storedIds = localStorage.getItem(LOCAL_STORAGE_KEY);
          setBookmarkedIds(storedIds ? JSON.parse(storedIds) : []);
        } catch (error) {
          console.error("Failed to parse bookmarks from localStorage", error);
          setBookmarkedIds([]);
        }
      }
      setLoading(false);
      setIsReady(true); // Signal that the initial load is complete
    };

    initializeBookmarks();
  }, [currentUser, authChecked, toast]);


  const addBookmark = useCallback(async (id: string) => {
    if (bookmarkedIds.includes(id)) return;

    const newIds = [...bookmarkedIds, id];
    setBookmarkedIds(newIds);

    if (currentUser) {
      // Logged-in user
      const userBookmarksRef = doc(db, 'bookmarks', currentUser.uid);
      try {
          // Use setDoc with merge to create if not exists, or update if it does.
          await setDoc(userBookmarksRef, { hustleIds: arrayUnion(id) }, { merge: true });
          toast({ title: "Hustle Saved!", description: "It's saved to your account." });
      } catch (err: any) {
         console.error("Firebase Error adding bookmark:", err);
         toast({ title: "Save Failed", description: "Could not save hustle to your account.", variant: 'destructive'});
         setBookmarkedIds(prev => prev.filter(bookmarkId => bookmarkId !== id)); // Revert on failure
      }
    } else {
      // Guest user
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
            setBookmarkedIds(prev => [...prev, id]); // Revert on failure
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
    <BookmarkContext.Provider value={{ bookmarkedIds, addBookmark, removeBookmark, isBookmarked, getBookmarkedHustles, loading, isReady }}>
      {children}
    </BookmarkContext.Provider>
  );
};

export const useBookmarks = () => {
  const context = useContext(BookmarkContext);
  if (context === undefined) {
    // This can happen on initial render before the provider is ready.
    // Return a default, non-functional value.
    return {
        bookmarkedIds: [],
        addBookmark: () => {},
        removeBookmark: () => {},
        isBookmarked: () => false,
        getBookmarkedHustles: () => [],
        loading: true,
        isReady: false,
    };
  }
  return context;
};
