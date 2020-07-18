import firebase from "firebase";

const firebaseApp = firebase.initializeApp( {
    apiKey: "AIzaSyA8QN2zIW7mx84M5WvlWSIrTLT1j9zUutI",
    authDomain: "instagramclone-6e0a2.firebaseapp.com",
    databaseURL: "https://instagramclone-6e0a2.firebaseio.com",
    projectId: "instagramclone-6e0a2",
    storageBucket: "instagramclone-6e0a2.appspot.com",
    messagingSenderId: "508835164753",
    appId: "1:508835164753:web:1c5c27f85a5190e82e3e70",
    measurementId: "G-TNFDFSZKMQ"
  });

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();

  export{db, auth, storage};