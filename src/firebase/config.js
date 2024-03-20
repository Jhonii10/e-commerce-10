// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey:process.env.REACT_APP_FB_API_KEY,
  authDomain: "react-eshop-110.firebaseapp.com",
  projectId: "react-eshop-110",
  storageBucket: "react-eshop-110.appspot.com",
  messagingSenderId: "234142962125",
  appId: "1:234142962125:web:ace97cb30fabe17323f484",
  measurementId: "G-HQ0K469HLH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app