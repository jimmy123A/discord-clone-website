import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDbeD_oD-GCYawT1lajrB6cMp-Twuw9pIU",
    authDomain: "discord-clone-3cf60.firebaseapp.com",
    databaseURL: "https://discord-clone-3cf60.firebaseio.com",
    projectId: "discord-clone-3cf60",
    storageBucket: "discord-clone-3cf60.appspot.com",
    messagingSenderId: "235917831367",
    appId: "1:235917831367:web:ad1f3a116012a5e52ca2e2",
    measurementId: "G-29BLCS10MS"
  };

   const firebaseApp = firebase.initializeApp(firebaseConfig);
   const db = firebaseApp.firestore();
   const auth = firebase.auth();
   const provider = new firebase.auth.GoogleAuthProvider();

   
   export { auth, provider };
   export default db;