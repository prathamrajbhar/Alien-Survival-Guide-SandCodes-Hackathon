import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
    apiKey: "AIzaSyBUETfZspiG_obqxhbMY8cJstGG5Yras2U",
    authDomain: "hackathon-project-907c6.firebaseapp.com",
    projectId: "hackathon-project-907c6",
    storageBucket: "hackathon-project-907c6.appspot.com",
    messagingSenderId: "285500612901",
    appId: "1:285500612901:web:c01b94a7d514b05b727acc"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const db = firebase.firestore();
export const storage = firebase.storage();
