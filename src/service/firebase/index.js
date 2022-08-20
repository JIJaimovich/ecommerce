
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAL2y3xQfzTAmjSqA2xMvIPpvjGc3pP7YY",
  authDomain: "ecommerce-1a5f2.firebaseapp.com",
  projectId: "ecommerce-1a5f2",
  storageBucket: "ecommerce-1a5f2.appspot.com",
  messagingSenderId: "758983106176",
  appId: "1:758983106176:web:2739c99d6e766a83d51065"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);