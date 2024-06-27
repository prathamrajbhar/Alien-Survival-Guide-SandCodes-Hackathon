import firebase from 'firebase/app';
import 'firebase/auth';

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
export default firebase;
