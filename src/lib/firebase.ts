// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCD383zH56x5GB4ohR62vAwxplYFrAxQAo",
  authDomain: "hustle-finder-qc2bi.firebaseapp.com",
  projectId: "hustle-finder-qc2bi",
  storageBucket: "hustle-finder-qc2bi.firebasestorage.app",
  messagingSenderId: "1070578805002",
  appId: "1:1070578805002:web:ca01097b60534023ad32f3"
};


// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };