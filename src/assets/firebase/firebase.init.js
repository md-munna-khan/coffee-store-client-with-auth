// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUlzkVyDkwtU1rALQ5Iq21x7scrOiH-hI",
  authDomain: "coffee-store-8a4ce.firebaseapp.com",
  projectId: "coffee-store-8a4ce",
  storageBucket: "coffee-store-8a4ce.firebasestorage.app",
  messagingSenderId: "352167301725",
  appId: "1:352167301725:web:cefe610642cd97e2d373b4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);