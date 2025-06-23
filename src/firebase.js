// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
//   authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
//   projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
//   storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
//   appId: import.meta.env.VITE_FIREBASE_APP_ID,
// };


const firebaseConfig = {
  apiKey: "AIzaSyC2jUxuF2fkCeuP1zbXjGdorwCYm6aBddo",
  authDomain: "nutrition-tracker-6b9b8.firebaseapp.com",
  projectId: "nutrition-tracker-6b9b8",
  storageBucket: "nutrition-tracker-6b9b8.firebasestorage.app",
  messagingSenderId: "705638007532",
  appId: "1:705638007532:web:31351ff4079db0f1081bc9",
  // measurementId: "G-SENY0MTMXN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
 const db =  getFirestore(app);
export { auth ,db};



