// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVZnB5pNcySHDm3hXvdzEJCerhVvJso0Q",
  authDomain: "ark-dev-it.firebaseapp.com",
  projectId: "ark-dev-it",
  storageBucket: "ark-dev-it.appspot.com",
  messagingSenderId: "42871557757",
  appId: "1:42871557757:web:29c6739109d3fe6e4c6b14"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);