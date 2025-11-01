
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDKHTFMQWEaNl1AIysegfoyM3K90q5mrZw",
  authDomain: "ticket-master-df8b8.firebaseapp.com",
  projectId: "ticket-master-df8b8",
  storageBucket: "ticket-master-df8b8.firebasestorage.app",
  messagingSenderId: "1079502551469",
  appId: "1:1079502551469:web:b4c82cb8a6abcaa0d1c924",
  measurementId: "G-N2M4P50WRS"
};

const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);

export { auth, db, storage };