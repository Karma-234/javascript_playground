import { initializeApp } from "./node_modules/@firebase/app";
import { getFirestore, collection, doc, getDocs } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyDeFKLM7vrxRXG_jN62q_-fvhGx0RpCXS4",
    authDomain: "javascript-playground-92ae2.firebaseapp.com",
    projectId: "javascript-playground-92ae2",
    storageBucket: "javascript-playground-92ae2.appspot.com",
    messagingSenderId: "794213238473",
    appId: "1:794213238473:web:5bb09ed6ba2f067417ef18",
    measurementId: "G-C8PF6K5YM5"
  };

  const db = getFirestore(app);
  // console.log();
  const users = collection(db,'users');
  console.log(doc(users).id);
  // Initialize Firebase
const app = initializeApp(firebaseConfig);
db.collection('users').get();