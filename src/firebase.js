import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  projectId: "resume-api-81358",
  apiKey: "AIzaSyDaIAnUkMqcNJwwdVAjrLaURzFa3kf0s4E",
  authDomain: "resume-api-81358.firebaseapp.com",
  databaseURL: "https://resume-api-81358.firebaseio.com",
  storageBucket: "resume-api-81358.appspot.com",
};

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();

export default firebase;
