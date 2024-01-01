import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2qOxOIjRDqo34hzQEP9KOSwGKs7Rjq_g",
  authDomain: "auth-prep-2.firebaseapp.com",
  projectId: "auth-prep-2",
  storageBucket: "auth-prep-2.appspot.com",
  messagingSenderId: "716857702378",
  appId: "1:716857702378:web:c54ceb25a2e70c3645a493"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
