import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyBaX49pFh4bpyZ0tqIjaMET-U0tpm3-50U",
  authDomain: "aoe-24.firebaseapp.com",
  projectId: "aoe-24",
  storageBucket: "aoe-24.appspot.com",
  messagingSenderId: "934076333752",
  appId: "1:934076333752:web:d373d0c1f4a15a80f47e4d"
};

const app = initializeApp(firebaseConfig);
export const db=getFirestore(app)
export const storage =getStorage(app)
export default app