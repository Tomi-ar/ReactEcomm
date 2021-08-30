import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/firestore';

const app = firebase.initializeApp({
    apiKey: "AIzaSyDu90W93PkcV-_L0veT4E36eWxMVKF8D1Q",
    authDomain: "buenasbirras-coder.firebaseapp.com",
    projectId: "buenasbirras-coder",
    storageBucket: "buenasbirras-coder.appspot.com",
    messagingSenderId: "631389758383",  
    appId: "1:631389758383:web:a8a0adcdbe5e7b27e3455a"
  
});

export const getFirebase = () => app;
export const getFirestore = () => firebase.firestore(app);
