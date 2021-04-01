import firebase from "firebase"

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCIMCy0MILB2vbCF6vw4M0zHvS7j9TjpIM",
    authDomain: "coapp-bf4b7.firebaseapp.com",
    projectId: "coapp-bf4b7",
    storageBucket: "coapp-bf4b7.appspot.com",
    messagingSenderId: "561798876710",
    appId: "1:561798876710:web:0377c9cdffaf246abb20e7",
    measurementId: "G-9F86CQXSR2"
  });

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();
  const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider, storage }