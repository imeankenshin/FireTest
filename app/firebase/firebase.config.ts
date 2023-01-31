// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// const env = process.env;

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyAdQqzoQ2liG-2DEu1pkGA87jKFG66GP9U',
	authDomain: 'firetest-a3e5a.firebaseapp.com',
	projectId: 'firetest-a3e5a',
	storageBucket: 'firetest-a3e5a.appspot.com',
	messagingSenderId: '504532686870',
	appId: '1:504532686870:web:5bed67750a09afcac77d37',
	measurementId: 'G-WBTK6V77GQ'
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
