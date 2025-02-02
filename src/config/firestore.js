// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const apiKey = import.meta.env.VITE_FIREBASE_API_KEY;
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: apiKey,
  authDomain: "e-commerce-ebb6e.firebaseapp.com",
  projectId: "e-commerce-ebb6e",
  storageBucket: "e-commerce-ebb6e.firebasestorage.app",
  messagingSenderId: "383790635571",
  appId: "1:383790635571:web:01b57df5f72b63a1542146",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app); // This gives us a firestore db instance
