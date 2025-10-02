// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB1zYjyBB3EZLiB2FRhN8yuMuEQGe5j5vw",
  authDomain: "innovationlab-2a7bf.firebaseapp.com",
  projectId: "innovationlab-2a7bf",
  storageBucket: "innovationlab-2a7bf.firebasestorage.app",
  messagingSenderId: "344321204065",
  appId: "1:344321204065:web:ab1d26d31f10de1f546f20",
  measurementId: "G-312Z660ZWE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);