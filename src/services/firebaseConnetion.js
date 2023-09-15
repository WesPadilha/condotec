import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyA5oUOZ0vnLexvJ0-S6vjghFjxzpQSrap8",
    authDomain: "condotec-7d744.firebaseapp.com",
    projectId: "condotec-7d744",
    storageBucket: "condotec-7d744.appspot.com",
    messagingSenderId: "724044105648",
    appId: "1:724044105648:web:d504fa55d5e9a3a53ab875"
  };

const firebaseApp = initializeApp(firebaseConfig);
const firestore = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);
const auth = getAuth(firebaseApp);

export { auth, storage, firestore };