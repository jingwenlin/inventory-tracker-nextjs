// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCVCMfTbCE-XY-pdTTZyedF2BJNAHEKJVk",
  authDomain: "inventory-app-a6eb8.firebaseapp.com",
  projectId: "inventory-app-a6eb8",
  storageBucket: "inventory-app-a6eb8.appspot.com",
  messagingSenderId: "285522629140",
  appId: "1:285522629140:web:42ca4653ba16bc41f0cd01",
  measurementId: "G-B0CS5611T7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export { firestore };