import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import firebase from "@firebase/app-compat";

const firebaseConfig = {
  apiKey: "AIzaSyDw6lmKvb39eImEGxcB22G3q7ngSlP9VKA",
  authDomain: "capsulecorp-527ce.firebaseapp.com",
  projectId: "capsulecorp-527ce",
  storageBucket: "capsulecorp-527ce.appspot.com",
  messagingSenderId: "167366877487",
  appId: "1:167366877487:web:56219b672d84e6e0b1c1da",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const getFirestores = () => firebase.firestore();
