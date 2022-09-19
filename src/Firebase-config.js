import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyD7re4amHAi108EIU-Xn7PutxGczNGrmFE",
    authDomain: "apitranslate12.firebaseapp.com",
    projectId: "apitranslate12",
    storageBucket: "apitranslate12.appspot.com",
    messagingSenderId: "478932616255",
    appId: "1:478932616255:web:98f690f589cbb6813a248a",
    measurementId: "G-5JTMX8N5J8"
  };

  const app = initializeApp(firebaseConfig)

  export  const auth = getAuth(app)