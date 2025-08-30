
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  projectId: "hustle-finder-qc2bi",
  appId: "1:1070578805002:web:ca01097b60534023ad32f3",
  storageBucket: "hustle-finder-qc2bi.firebasestorage.app",
  apiKey: "AIzaSyCD383zH56x5GB4ohR62vAwxplYFrAxQAo",
  authDomain: "hustle-finder-qc2bi.firebaseapp.com",
  messagingSenderId: "1070578805002",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
