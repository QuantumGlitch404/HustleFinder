
'use client';

import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { 
  onAuthStateChanged, 
  User, 
  signInWithPopup, 
  GoogleAuthProvider, 
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile
} from 'firebase/auth';
import { auth, db } from '@/lib/firebase';
import { doc, setDoc, getDoc, serverTimestamp } from 'firebase/firestore';
import { useToast } from '@/hooks/use-toast';

interface AuthContextType {
  user: User | null;
  loading: boolean;
  signInWithGoogle: () => Promise<User | null>;
  signInWithEmail: (credentials: any) => Promise<User | null>;
  signUpWithEmail: (credentials: any) => Promise<User | null>;
  logOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  const handleUserCreationInDB = async (user: User) => {
    const userDocRef = doc(db, 'users', user.uid);
    const userDoc = await getDoc(userDocRef);
    if (!userDoc.exists()) {
      let displayName = user.displayName;
      if (!displayName && user.email) {
        displayName = user.email.split('@')[0];
      }
      await setDoc(userDocRef, {
        email: user.email,
        displayName: displayName,
        photoURL: user.photoURL,
        createdAt: serverTimestamp(),
        bookmarks: [],
      });
       // Also update the auth profile if name was generated
      if (user.displayName !== displayName) {
          await updateProfile(user, { displayName });
      }
    }
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUser(user);
        await handleUserCreationInDB(user);
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const signInWithGoogle = async (): Promise<User | null> => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      toast({
        title: "Signed In",
        description: "Welcome back! You're now signed in.",
      });
      return result.user;
    } catch (error: any) {
      console.error("Google sign-in error:", error);
      toast({
        title: "Sign In Failed",
        description: error.message || "Could not sign in with Google. Please try again.",
        variant: "destructive",
      });
       return null;
    }
  };

  const signInWithEmail = async ({ email, password }): Promise<User | null> => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      toast({
        title: "Signed In",
        description: "Welcome back! You're now signed in.",
      });
      return userCredential.user;
    } catch (error: any) {
      console.error("Email sign-in error:", error);
       toast({
        title: "Sign In Failed",
        description: error.message || "Invalid email or password. Please try again.",
        variant: "destructive",
      });
       return null;
    }
  };

  const signUpWithEmail = async ({ email, password }): Promise<User | null> => {
      try {
          const userCredential = await createUserWithEmailAndPassword(auth, email, password);
          const newUser = userCredential.user;
          // Generate a display name from email
          const displayName = email.split('@')[0];
          await updateProfile(newUser, { displayName });

          // The onAuthStateChanged listener will handle DB creation,
          // but we can call it here too to be safe and immediate.
          await handleUserCreationInDB(newUser);

          toast({
              title: "Account Created",
              description: "Welcome! Your account has been successfully created.",
          });
          return newUser;
      } catch (error: any) {
          console.error("Email sign-up error:", error);
          toast({
              title: "Sign Up Failed",
              description: error.message || "Could not create account. Please try again.",
              variant: "destructive",
          });
          return null;
      }
  };


  const logOut = async () => {
    try {
      await signOut(auth);
      toast({
        title: "Signed Out",
        description: "You have been successfully signed out.",
      });
    } catch (error) {
      console.error("Sign out error:", error);
       toast({
        title: "Sign Out Failed",
        description: "Could not sign out. Please try again.",
        variant: "destructive",
      });
    }
  };

  const value = {
    user,
    loading,
    signInWithGoogle,
    signInWithEmail,
    signUpWithEmail,
    logOut,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
