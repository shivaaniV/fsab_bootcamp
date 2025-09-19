// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics"; // Commenting this out
import { getFirestore, collection, addDoc } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDgI5dOsVC_Tzj37MGV6Qh2FC7uFDqGYvY",
  authDomain: "fsab-website-78e54.firebaseapp.com",
  projectId: "fsab-website-78e54",
  storageBucket: "fsab-website-78e54.firebasestorage.app",
  messagingSenderId: "495034379271",
  appId: "1:495034379271:web:b578ae56799c3889478ea2",
  measurementId: "G-JS9ZPCJKHL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app); // Commenting this out

export const db = getFirestore(app); // added by me