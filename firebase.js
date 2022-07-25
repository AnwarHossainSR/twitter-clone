// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAcYlQQ_9wjmBbilfh_3IZ7Uzx90hrnByA',
  authDomain: 'twitter-clone-v01.firebaseapp.com',
  projectId: 'twitter-clone-v01',
  storageBucket: 'twitter-clone-v01.appspot.com',
  messagingSenderId: '781845245080',
  appId: '1:781845245080:web:db78490a944f4744c5b4ed',
  measurementId: 'G-TJ3V60G4BZ',
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };
