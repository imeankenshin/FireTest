// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCTzNC-OeZFKQZKMscv7XtwThij_iiRXIw",
  authDomain: "firetest-7bdf7.firebaseapp.com",
  projectId: "firetest-7bdf7",
  storageBucket: "firetest-7bdf7.appspot.com",
  messagingSenderId: "1002774150204",
  appId: "1:1002774150204:web:adcc035b022eab1ae9d739",
  measurementId: "G-M2Z8Q5EFSZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
