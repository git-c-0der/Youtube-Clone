// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDxGbf35PUpQoHkNjlIk8Vp31EvxMVRCCw",
  authDomain: "clone-6b9cb.firebaseapp.com",
  projectId: "clone-6b9cb",
  storageBucket: "clone-6b9cb.firebasestorage.app",
  messagingSenderId: "32584081111",
  appId: "1:32584081111:web:ee39b7e63c3ca38ae95a92",
  measurementId: "G-GYS3Q574XH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);