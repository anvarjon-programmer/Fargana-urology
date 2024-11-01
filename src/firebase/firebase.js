import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCibYmPbiT3APl9pid0Ntazo13smzyxDLI",
    authDomain: "urologiya-102e9.firebaseapp.com",
    projectId: "urologiya-102e9",
    storageBucket: "urologiya-102e9.appspot.com",
    messagingSenderId: "1005640730315",
    appId: "1:1005640730315:web:4eade927e8c94b93f3bd4e"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, app };