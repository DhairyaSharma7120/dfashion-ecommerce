import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAM6PPa-0Py-YjPMOW4S9PN0N9ep5TumF4",
    authDomain: "dfashion-db.firebaseapp.com",
    databaseURL: "https://dfashion-db.firebaseio.com",
    projectId: "dfashion-db",
    storageBucket: "dfashion-db.appspot.com",
    messagingSenderId: "861829670545",
    appId: "1:861829670545:web:82ed0bd9f2757b374b0130",
    measurementId: "G-D5ZLDCSZV9"
  };


  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle =() => auth.signInWithPopup(provider);

  export default firebase;