import firebase from 'firebase/app';
import 'firebase/firestore';

const fb = firebase.initializeApp({
    apiKey: "AIzaSyDaIAnUkMqcNJwwdVAjrLaURzFa3kf0s4E",
    authDomain: "resume-api-81358.firebaseapp.com",
    databaseURL: "https://resume-api-81358.firebaseio.com",
    projectId: "resume-api-81358",
    storageBucket: "resume-api-81358.appspot.com",
    messagingSenderId: "762523905165",
    appId: "1:762523905165:web:50156bd4dcd54525b7c6c4"
});

const db = fb.firestore();

export default db;