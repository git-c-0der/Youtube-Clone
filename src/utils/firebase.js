// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDTTZIYioZN2aFx_Kol74oNlpLHGWZfN3c",
  authDomain: "project-b5d19.firebaseapp.com",
  projectId: "project-b5d19",
  storageBucket: "project-b5d19.appspot.com",
  messagingSenderId: "249990807840",
  appId: "1:249990807840:web:1646f963313a1a4aee5745",
  measurementId: "G-RT3HQYSJEY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);