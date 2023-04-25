// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDaaZ3CzvjHvIOjB-5pEwhTGGVodhVdTR4",
  authDomain: "client-news-portal.firebaseapp.com",
  projectId: "client-news-portal",
  storageBucket: "client-news-portal.appspot.com",
  messagingSenderId: "286059921424",
  appId: "1:286059921424:web:1382b8de41b1373e6dca95"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);