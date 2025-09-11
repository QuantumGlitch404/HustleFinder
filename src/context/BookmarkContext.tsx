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
  const { user } = useAuth();
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  const syncBookmarks = useCallback(async (localIds: string[], userId: string) => {
    const userBookmarksRef = doc(db, 'bookmarks', userId);
    const docSnap = await getDoc(userBookmarksRef);
    let remoteIds: string[] = [];

    if (docSnap.exists()) {
      remoteIds = docSnap.data().hustleIds || [];
    }

    const mergedIds = [...new Set([...localIds, ...remoteIds])];

    if (mergedIds.length > 0) {
        await setDoc(userBookmarksRef, { hustleIds: mergedIds }, { merge: true });
    }
    
    setBookmarkedIds(mergedIds);
    localStorage.removeItem(LOCAL_STORAGE_KEY);
  }, []);

  useEffect(() => {
    const initializeBookmarks = async () => {
      setLoading(true);
      if (user) {
        // User is logged in
        const localGuestIds = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || '[]');
        if (localGuestIds.length > 0) {
          await syncBookmarks(localGuestIds, user.uid);
        } else {
          const userBookmarksRef = doc(db, 'bookmarks', user.uid);
          const docSnap = await getDoc(userBookmarksRef);
          if (docSnap.exists()) {
            setBookmarkedIds(docSnap.data().hustleIds || []);
          } else {
            setBookmarkedIds([]);
          }
        }
      } else {
        // User is a guest
        try {
          const storedIds = localStorage.getItem(LOCAL_STORAGE_KEY);
          if (storedIds) {
            setBookmarkedIds(JSON.parse(storedIds));
          } else {
             setBookmarkedIds([]);
          }
        } catch (error) {
          console.error("Failed to parse bookmarks from localStorage", error);
        }
      }
      setLoading(false);
    };

    initializeBookmarks();
  }, [user, syncBookmarks]);

  const addBookmark = useCallback(async (id: string) => {
    if (user) {
      // Logged-in user
      const userBookmarksRef = doc(db, 'bookmarks', user.uid);
      await updateDoc(userBookmarksRef, {
        hustleIds: arrayUnion(id)
      }).catch(async (err) => {
        if (err.code === 'not-found') {
          await setDoc(userBookmarksRef, { hustleIds: [id] });
        } else {
          throw err;
        }
      });
      setBookmarkedIds(prev => [...new Set([...prev, id])]);
      toast({ title: "Hustle Saved!", description: "It's saved to your account." });

    } else {
      // Guest user
      setBookmarkedIds((prevIds) => {
        const newIds = [...new Set([...prevIds, id])];
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newIds));
        toast({ title: "Hustle Saved!", description: "Log in to sync your saved hustles across devices." });
        return newIds;
      });
    }
  }, [user, toast]);

  const removeBookmark = useCallback(async (id: string) => {
     if (user) {
        const userBookmarksRef = doc(db, 'bookmarks', user.uid);
        await updateDoc(userBookmarksRef, {
            hustleIds: arrayRemove(id)
        });
        setBookmarkedIds(prev => prev.filter(bookmarkId => bookmarkId !== id));
        toast({ title: "Removed from Saved", description: "Hustle removed from your saved list." });
    } else {
        setBookmarkedIds((prevIds) => {
          const newIds = prevIds.filter((bookmarkId) => bookmarkId !== id);
          localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newIds));
          toast({ title: "Removed from Saved", description: "Hustle removed from your saved list." });
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
