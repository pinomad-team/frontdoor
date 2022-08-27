// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDjqvAsjzCNhSbCm7jeFn67iAjEJH-_NKE',
  authDomain: 'pinomad.firebaseapp.com',
  projectId: 'pinomad',
  storageBucket: 'pinomad.appspot.com',
  messagingSenderId: '1071644885799',
  appId: '1:1071644885799:web:c04841c2aa63c057cddf02',
  measurementId: 'G-W2L87C6D3X',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

auth.languageCode = 'ko';
