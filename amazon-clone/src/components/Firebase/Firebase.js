// Import the functions you need from the SDKs you need
import firebase from 'firebase';
// import {getAuth} from 'firebase/auth'
// import { initializeApp } from '@firebase/app';
// import { getAuth, signInWithEmailAndPassword } from "@firebase/auth";
// import { getFirestore } from '@firebase/firestore';// import firebase from 'firebase';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCufLnCf_DVG3GWyWzGKQhTZu2B0KOKJhA",
    authDomain: "clone-9abbb.firebaseapp.com",
    projectId: "clone-9abbb",
    storageBucket: "clone-9abbb.appspot.com",
    messagingSenderId: "934710745106",
    appId: "1:934710745106:web:295660c82a14d6998fa0cb"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const db = getFirestore(firebaseApp);
// const auth = getAuth(firebaseApp);
// const signIn = signInWithEmailAndPassword();
const db = firebaseApp.firestore();
const auth = firebaseApp.auth()
export { db, auth }