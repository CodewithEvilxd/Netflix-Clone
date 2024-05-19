import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
  authDomain: "netflix-36888.firebaseapp.com",
  projectId: "netflix-36888",
  storageBucket: "netflix-36888.appspot.com",
  messagingSenderId: "471844651239",
  appId:"1:471844651239:web:131e7c35923a6d95d42242",
}

const app = initializeApp(firebaseConfig)
const firebaseStorage = getStorage(app)
const firebaseDb = getFirestore(app)
const firebaseAuth = getAuth(app)

export { firebaseStorage, firebaseDb, firebaseAuth }
