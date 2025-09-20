
"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { onAuthStateChanged, type User } from 'firebase/auth';
import { auth, db } from '@/lib/firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { Loader2 } from 'lucide-react';
import { useBookmarks, BookmarkProvider } from './BookmarkContext'; // Import useBookmarks and BookmarkProvider

interface AuthContextType {
  user: User | null;
  loading: boolean; // This will represent the combined auth and initial bookmark loading
  userProfile: UserProfile | null;
}

export interface UserProfile {
  uid: string;
  email: string | null;
  displayName: string | null;
  photoURL: string | null;
  age?: number;
  gender?: 'male' | 'female' | 'other' | 'prefer-not-to-say';
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Renaming the inner provider to avoid confusion
const AuthStateProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [authLoading, setAuthLoading] = useState(true);
  
  // Get the loading state from the BookmarkContext
  const { loading: bookmarksLoading, isReady: bookmarksReady } = useBookmarks();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setAuthLoading(true); // Start loading on any auth state change
      if (user) {
        setUser(user);
        const userRef = doc(db, "users", user.uid);
        try {
            const docSnap = await getDoc(userRef);
            if (docSnap.exists()) {
              setUserProfile(docSnap.data() as UserProfile);
            } else {
              // Create user profile if it doesn't exist
              const newUserProfile: UserProfile = {
                uid: user.uid,
                email: user.email,
                displayName: user.displayName,
                photoURL: user.photoURL,
              };
              await setDoc(userRef, newUserProfile);
              setUserProfile(newUserProfile);
            }
        } catch (error) {
            console.error("Error fetching or creating user profile:", error);
            setUser(null);
            setUserProfile(null);
        }
      } else {
        setUser(null);
        setUserProfile(null);
      }
      setAuthLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // The overall loading is true if either auth or bookmarks are not ready
  const isLoading = authLoading || !bookmarksReady;

  if (isLoading) {
     return (
      <div className="fixed inset-0 bg-background z-[99999] flex flex-col items-center justify-center text-center p-6">
        <Loader2 className="h-12 w-12 animate-spin text-primary mb-4" />
        <p className="text-lg text-foreground">Initializing Session...</p>
      </div>
    );
  }

  return (
    <AuthContext.Provider value={{ user, loading: isLoading, userProfile }}>
      {children}
    </AuthContext.Provider>
  );
};


export const AuthProvider = ({ children }: { children: ReactNode }) => {
  return (
    // Wrap AuthStateProvider with BookmarkProvider so it can access its context
    <BookmarkProvider>
        <AuthStateProvider>
            {children}
        </AuthStateProvider>
    </BookmarkProvider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

// We need to move BookmarkProvider out of layout.tsx and wrap our AuthStateProvider
// so we'll redefine the layout here.
export function RootLayoutWrapper({children}: {children: ReactNode}) {
  return <AuthProvider>{children}</AuthProvider>
}
