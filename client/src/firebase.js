// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-project-de002.firebaseapp.com",
  projectId: "mern-project-de002",
  storageBucket: "mern-project-de002.appspot.com",
  messagingSenderId: "479747861062",
  appId: "1:479747861062:web:acb50c00598555cf8b3847"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);