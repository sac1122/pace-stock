// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBj_biBbC2C_F4pjLQcLmtsGjKmpMRVFrE",
  authDomain: "sign-in-eb995.firebaseapp.com",
  projectId: "sign-in-eb995",
  storageBucket: "sign-in-eb995.appspot.com",
  messagingSenderId: "374193627539",
  appId: "1:374193627539:web:b7c552dd46413b2bae4866"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const authentication = getAuth(app);