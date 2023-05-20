// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCO33QxsjGzg06hzkXansabEggddL0w-gY",
    authDomain: "just-fit-57fab.firebaseapp.com",
    projectId: "just-fit-57fab",
    storageBucket: "just-fit-57fab.appspot.com",
    messagingSenderId: "789202111138",
    appId: "1:789202111138:web:ec27f739b46c32d14da5fb",
    measurementId: "G-L3L3KVMP67"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
