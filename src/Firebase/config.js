import firebase from 'firebase/app'
import 'firebase/firestore'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyACnQejJHNcq2lQcesc30_rH5NF9rMURro",
    authDomain: "live-chat-25cd9.firebaseapp.com",
    projectId: "live-chat-25cd9",
    storageBucket: "live-chat-25cd9.appspot.com",
    messagingSenderId: "1002255553607",
    appId: "1:1002255553607:web:a85824350af635efb5cd62",
    measurementId: "G-SYBGC8BKR4"
  };

  //init firebase
  firebase.initializeApp(firebaseConfig)

  const projectfirestore = firebase.firestore

  const timestamp = firebase.firestore.fieldValue.serverTimestamp

  export { projectfirestore, timestamp }