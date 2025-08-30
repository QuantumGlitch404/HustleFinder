
"use client";

import type { Hustle } from '@/types/hustle';
import React, { createContext, useContext, useState, useEffect, type ReactNode, useCallback } from 'react';
import { useAuth } from './AuthContext';
import { doc, getDoc, setDoc, updateDoc, arrayUnion, arrayRemove, onSnapshot } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { useToast } from '@/hooks/use-toast';

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
  const { user, loading: authLoading } = useAuth();
  const { toast } = useToast();
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  // Effect for handling guest (logged-out) bookmarks from local storage
  useEffect(() => {
    if (!user && !authLoading) {
      const storedIds = localStorage.getItem(LOCAL_STORAGE_KEY);
      setBookmarkedIds(storedIds ? JSON.parse(storedIds) : []);
      setLoading(false);
    }
  }, [user, authLoading]);

  // Effect for handling logged-in user bookmarks from Firestore
  useEffect(() => {
    if (user && !authLoading) {
      setLoading(true);
      const userDocRef = doc(db, 'users', user.uid);
      const unsubscribe = onSnapshot(userDocRef, (docSnap) => {
        if (docSnap.exists()) {
          setBookmarkedIds(docSnap.data().bookmarks || []);
        } else {
          setBookmarkedIds([]);
        }
        setLoading(false);
      }, (error) => {
        console.error("Error listening to bookmark changes:", error);
        toast({ title: "Error", description: "Could not fetch saved hustles.", variant: "destructive" });
        setLoading(false);
      });

      return () => unsubscribe();
    }
  }, [user, authLoading, toast]);


  const addBookmark = useCallback(async (id: string) => {
    if (user) {
      setLoading(true);
      const userDocRef = doc(db, 'users', user.uid);
      try {
        await updateDoc(userDocRef, { bookmarks: arrayUnion(id) });
      } catch (error: any) {
        if (error.code === 'not-found') {
          await setDoc(userDocRef, { bookmarks: [id] });
        } else {
          throw error;
        }
      } finally {
        // State update handled by onSnapshot
      }
    } else {
      setBookmarkedIds((prevIds) => {
        const newIds = [...new Set([...prevIds, id])];
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newIds));
        return newIds;
      });
    }
  }, [user]);

  const removeBookmark = useCallback(async (id: string) => {
    if (user) {
      setLoading(true);
      const userDocRef = doc(db, 'users', user.uid);
      await updateDoc(userDocRef, { bookmarks: arrayRemove(id) });
      // State update handled by onSnapshot
    } else {
      setBookmarkedIds((prevIds) => {
        const newIds = prevIds.filter((bookmarkId) => bookmarkId !== id);
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newIds));
        return newIds;
      });
    }
  }, [user]);
  
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
