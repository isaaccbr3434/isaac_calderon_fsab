// In this file we will initialize our firebase database

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: copy-paste the config variables found in your Firebase Project Settings!
const firebaseConfig = {
	apiKey: "AIzaSyCFT6W02d-MbZfuPnTzbp-Jz-8IY0eJvqk",
	authDomain: "fsabproject.firebaseapp.com",
	projectId: "fsabproject",
	storageBucket: "fsabproject.appspot.com",
	messagingSenderId: "914168292052",
	appId: "1:914168292052:web:b3018531d9682bef4e5141",
	measurementId: "G-XQSRRBPM2K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);