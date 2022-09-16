import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBIFFe0OTvytNpLBZ3ynAQeFXJ1p2l9qyE",
  authDomain: "clone-1750e.firebaseapp.com",
  projectId: "clone-1750e",
  storageBucket: "clone-1750e.appspot.com",
  messagingSenderId: "178766653369",
  appId: "1:178766653369:web:df13bf1b8d39022640b868",
  measurementId: "G-0EQLXF9KF5",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export {
  db,
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
};
