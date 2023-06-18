import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyCS8QC0me9UnFcHtR4PDKKqjfAXVRm3BOw",
  authDomain: "tiktok-anadamore.firebaseapp.com",
  projectId: "tiktok-anadamore",
  storageBucket: "tiktok-anadamore.appspot.com",
  messagingSenderId: "643044154496",
  appId: "1:643044154496:web:55a9f35ac3ce5cdf86da65"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;