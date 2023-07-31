// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_x8FefZMknS9LwwbqWo85C1Fhvv9YU7U",
  authDomain: "ace-website-db.firebaseapp.com",
  projectId: "ace-website-db",
  storageBucket: "ace-website-db.appspot.com",
  messagingSenderId: "433130560731",
  appId: "1:433130560731:web:165eb199907996c1ee80fe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;