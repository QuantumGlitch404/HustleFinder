
"use client";

import type { Hustle } from '@/types/hustle';
import React, { createContext, useContext, useState, useEffect, type ReactNode, useCallback } from 'react';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from './AuthContext';
import { db } from '@/lib/firebase';
import { doc, getDoc, setDoc, onSnapshot } from 'firebase/firestore';

interface BookmarkContextType {
  bookmarkedIds: string[];
  addBookmark: (id: string) => Promise<void>;
  removeBookmark: (id: string) => Promise<void>;
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

  // Load bookmarks from local storage for guest users
  useEffect(() => {
    if (!user && !authLoading) {
      try {
        const storedIds = localStorage.getItem(LOCAL_STORAGE_KEY);
        if (storedIds) {
          setBookmarkedIds(JSON.parse(storedIds));
        }
      } catch (error) {
        console.error("Failed to parse guest bookmarks from localStorage", error);
        toast({
          title: "Could not load saved hustles",
          description: "There was an error reading your saved items from this browser.",
          variant: "destructive",
        });
      }
      setLoading(false);
    }
  }, [user, authLoading, toast]);

  // Sync bookmarks with Firestore for logged-in users
  useEffect(() => {
    if (user) {
      setLoading(true);
      const userBookmarksRef = doc(db, 'userBookmarks', user.uid);
      const unsubscribe = onSnapshot(userBookmarksRef, (docSnap) => {
        if (docSnap.exists()) {
          setBookmarkedIds(docSnap.data().hustleIds || []);
        } else {
          setBookmarkedIds([]);
        }
        setLoading(false);
      }, (error) => {
        console.error("Firestore snapshot error:", error);
        toast({ title: 'Error loading saved hustles', variant: 'destructive' });
        setLoading(false);
      });

      return () => unsubscribe();
    }
  }, [user, toast]);
  
  // Merge guest bookmarks to cloud when user logs in
  useEffect(() => {
    if (user) {
      const guestBookmarks = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || '[]');
      if (guestBookmarks.length > 0) {
        const mergeBookmarks = async () => {
          const userBookmarksRef = doc(db, 'userBookmarks', user.uid);
          const docSnap = await getDoc(userBookmarksRef);
          const existingBookmarks = docSnap.exists() ? docSnap.data().hustleIds : [];
          const merged = [...new Set([...existingBookmarks, ...guestBookmarks])];
          
          await setDoc(userBookmarksRef, { hustleIds: merged }, { merge: true });
          localStorage.removeItem(LOCAL_STORAGE_KEY);
          toast({ title: 'Guest hustles saved to your account!' });
        };
        mergeBookmarks();
      }
    }
  }, [user, toast]);

  const addBookmark = useCallback(async (id: string) => {
    if (user) {
      const newIds = [...new Set([...bookmarkedIds, id])];
      await setDoc(doc(db, 'userBookmarks', user.uid), { hustleIds: newIds });
      toast({ title: "Hustle Saved!", description: "You can find it on your 'Saved' page.", variant: "default" });
    } else {
      setBookmarkedIds((prevIds) => {
        const newIds = [...new Set([...prevIds, id])];
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newIds));
        return newIds;
      });
      toast({ title: "Hustle Saved!", description: "Sign in to sync your saved hustles across devices." });
    }
  }, [user, bookmarkedIds, toast]);

  const removeBookmark = useCallback(async (id: string) => {
    if (user) {
      const newIds = bookmarkedIds.filter((bookmarkId) => bookmarkId !== id);
      await setDoc(doc(db, 'userBookmarks', user.uid), { hustleIds: newIds });
      toast({ title: "Removed from Saved", description: "Hustle removed from your saved list." });
    } else {
      setBookmarkedIds((prevIds) => {
        const newIds = prevIds.filter((bookmarkId) => bookmarkId !== id);
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newIds));
        return newIds;
      });
      toast({ title: "Removed from Saved", description: "Hustle removed from your saved list." });
    }
  }, [user, bookmarkedIds, toast]);
  
  const isBookmarked = useCallback((id: string) => {
    return bookmarkedIds.includes(id);
  }, [bookmarkedIds]);

  const getBookmarkedHustles = useCallback((allHustles: Hustle[]): Hustle[] => {
    return allHustles.filter(hustle => bookmarkedIds.includes(hustle.id));
  }, [bookmarkedIds]);
  

  return (
    <BookmarkContext.Provider value={{ bookmarkedIds, addBookmark, removeBookmark, isBookmarked, getBookmarkedHustles, loading: loading || authLoading }}>
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
