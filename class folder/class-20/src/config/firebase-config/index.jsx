// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8yCuEy-wS5_L4ajLxZjYqHHrTFns6FVE",
  authDomain: "react-firebase-d3b58.firebaseapp.com",
  databaseURL: "https://react-firebase-d3b58-default-rtdb.firebaseio.com",
  projectId: "react-firebase-d3b58",
  storageBucket: "react-firebase-d3b58.appspot.com",
  messagingSenderId: "865765272699",
  appId: "1:865765272699:web:6e8c738901dbf40ce8c6de"
};

// Initialize Firebase
const firebase_app = initializeApp(firebaseConfig);
const auth = getAuth(firebase_app);


export {firebase_app, auth}