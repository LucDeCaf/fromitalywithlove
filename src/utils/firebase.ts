import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY!,
  authDomain: "fromitalywithlove-de808.firebaseapp.com",
  projectId: "fromitalywithlove-de808",
  storageBucket: "fromitalywithlove-de808.appspot.com",
  messagingSenderId: "620171612304",
  appId: "1:620171612304:web:a621ab03d4f74c94604815",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
