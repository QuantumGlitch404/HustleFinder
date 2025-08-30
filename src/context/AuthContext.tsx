
'use client';

import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { onAuthStateChanged, User, signOut as firebaseSignOut, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '@/lib/firebase';
import { doc, getDoc, setDoc, serverTimestamp } from 'firebase/firestore';
import { useToast } from '@/hooks/use-toast';
import { Loader2 } from 'lucide-react';

export interface UserProfile {
  uid: string;
  email: string | null;
  displayName: string | null;
  photoURL: string | null;
  age?: number;
  gender?: 'male' | 'female' | 'other' | 'prefer-not-to-say';
  createdAt: any;
}

interface AuthContextType {
  user: User | null;
  userProfile: UserProfile | null;
  loading: boolean;
  signInWithGoogle: () => Promise<void>;
  signUpWithEmail: (email:string, password:string, displayName:string) => Promise<void>;
  signInWithEmail: (email:string, password:string) => Promise<void>;
  signOut: () => Promise<void>;
  updateUserProfile: (data: Partial<UserProfile>) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const LoadingScreen = () => (
    <div className="fixed inset-0 bg-background z-[100] flex flex-col items-center justify-center">
        <Loader2 className="h-12 w-12 animate-spin text-primary mb-4" />
        <p className="text-lg text-muted-foreground">Initializing session...</p>
    </div>
)

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setLoading(true);
      if (user) {
        setUser(user);
        const userRef = doc(db, 'users', user.uid);
        const docSnap = await getDoc(userRef);
        if (docSnap.exists()) {
          setUserProfile(docSnap.data() as UserProfile);
        } else {
          // Create a new profile if it doesn't exist
          const newUserProfile: UserProfile = {
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL,
            createdAt: serverTimestamp(),
          };
          await setDoc(userRef, newUserProfile);
          setUserProfile(newUserProfile);
        }
      } else {
        setUser(null);
        setUserProfile(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      toast({ title: 'Successfully signed in with Google!', variant: 'default' });
    } catch (error: any) {
      console.error("Google Sign-In Error:", error);
      toast({ title: 'Google Sign-In Failed', description: error.message, variant: 'destructive' });
    }
  };

  const signUpWithEmail = async (email: string, password: string, displayName: string) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const newUser = userCredential.user;
      
      const userRef = doc(db, 'users', newUser.uid);
      const newUserProfile: UserProfile = {
        uid: newUser.uid,
        email: newUser.email,
        displayName: displayName,
        photoURL: null,
        createdAt: serverTimestamp(),
      };
      await setDoc(userRef, newUserProfile);
      setUserProfile(newUserProfile);
      toast({ title: 'Account Created Successfully!', description: 'Welcome to Hustle Finder.', variant: 'default' });
    } catch (error: any) {
      console.error("Email/Pass Sign-Up Error:", error);
      toast({ title: 'Sign-Up Failed', description: error.message, variant: 'destructive' });
      throw error;
    }
  };

  const signInWithEmail = async (email: string, password: string) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast({ title: 'Signed In Successfully!', variant: 'default' });
    } catch (error: any) {
      console.error("Email/Pass Sign-In Error:", error);
      toast({ title: 'Sign-In Failed', description: error.message, variant: 'destructive' });
      throw error;
    }
  }

  const signOut = async () => {
    try {
      await firebaseSignOut(auth);
      toast({ title: 'Signed Out', description: 'You have been successfully signed out.' });
    } catch (error: any) {
      console.error("Sign Out Error:", error);
      toast({ title: 'Sign Out Failed', description: error.message, variant: 'destructive' });
    }
  };

  const updateUserProfile = async (data: Partial<UserProfile>) => {
    if (!user) return;
    try {
      const userRef = doc(db, 'users', user.uid);
      await setDoc(userRef, data, { merge: true });
      setUserProfile(prev => prev ? { ...prev, ...data } : null);
      toast({ title: 'Profile Updated!', variant: 'default' });
    } catch (error: any) {
      console.error("Update Profile Error:", error);
      toast({ title: 'Update Failed', description: error.message, variant: 'destructive' });
    }
  };

  return (
    <AuthContext.Provider value={{ user, userProfile, loading, signInWithGoogle, signUpWithEmail, signInWithEmail, signOut, updateUserProfile }}>
      {loading && <LoadingScreen />}
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
