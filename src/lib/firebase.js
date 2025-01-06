
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "chatappwithai.firebaseapp.com",
  projectId: "chatappwithai",
  storageBucket: "chatappwithai.firebasestorage.app",
  messagingSenderId: "343274224773",
  appId: "1:343274224773:web:9945ea1e48c8ec5198bdec"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();
const db = getFirestore();