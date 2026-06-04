import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey:
    import.meta.env.VITE_FIREBASE_API_KEY ||
    "AIzaSyA_x8FefZMknS9LwwbqWo85C1Fhvv9YU7U",
  authDomain:
    import.meta.env.VITE_FIREBASE_AUTH_DOMAIN ||
    "ace-website-db.firebaseapp.com",
  projectId:
    import.meta.env.VITE_FIREBASE_PROJECT_ID || "ace-website-db",
  storageBucket:
    import.meta.env.VITE_FIREBASE_STORAGE_BUCKET ||
    "ace-website-db.appspot.com",
  messagingSenderId:
    import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "433130560731",
  appId:
    import.meta.env.VITE_FIREBASE_APP_ID ||
    "1:433130560731:web:165eb199907996c1ee80fe",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
