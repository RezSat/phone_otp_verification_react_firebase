// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDEOC1LBs0A0NDGyZb5KvBbbVYopGeUamQ",
  authDomain: "yacademy-77adc.firebaseapp.com",
  projectId: "yacademy-77adc",
  storageBucket: "yacademy-77adc.appspot.com",
  messagingSenderId: "153475433489",
  appId: "1:153475433489:web:e6f2d47ceb6590d3909db0",
  measurementId: "G-KEMT08MHNP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
