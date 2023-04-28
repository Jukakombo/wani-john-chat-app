import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBa3LhriDBjogyfv6pToYxPiN10usgV8Qs",
  authDomain: "wani-john.firebaseapp.com",
  projectId: "wani-john",
  storageBucket: "wani-john.appspot.com",
  messagingSenderId: "827957992042",
  appId: "1:827957992042:web:9a6ca193e2a9ee3b8c0813",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
