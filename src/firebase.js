import firebase from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyDaIAnUkMqcNJwwdVAjrLaURzFa3kf0s4E",
  authDomain: "resume-api-81358.firebaseapp.com",
  databaseURL: "https://resume-api-81358.firebaseio.com",
  storageBucket: "resume-api-81358.appspot.com",
};

firebase.initializeApp(firebaseConfig);

// window.firebase = firebase;

// export const database = firebase.database();

export default firebase;
