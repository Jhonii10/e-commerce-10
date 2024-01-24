// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDimiJ01zPcbGoeJwcfp19J3rfSo9FIpfU",
  authDomain: "react-eshop-10.firebaseapp.com",
  projectId: "react-eshop-10",
  storageBucket: "react-eshop-10.appspot.com",
  messagingSenderId: "496608820134",
  appId: "1:496608820134:web:c9b0f9e69252397765ed67",
  measurementId: "G-HGD3WXDQP8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app