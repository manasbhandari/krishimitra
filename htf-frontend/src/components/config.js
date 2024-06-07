// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import 'dotenv/config'

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API,
  authDomain: "krishi--mitra.firebaseapp.com",
  projectId: "krishi--mitra",
  storageBucket: "krishi--mitra.appspot.com",
  messagingSenderId: "825019904924",
  appId: "1:825019904924:web:7b3cf0f61485890e5d0e59",
  measurementId: "G-Q0TY6T91J4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { auth, provider };
