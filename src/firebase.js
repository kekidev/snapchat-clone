import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDs7nv6sDSnPanIFaJHA8e7NFG0htq4UEY",
  authDomain: "snapchat-clone-3297f.firebaseapp.com",
  projectId: "snapchat-clone-3297f",
  storageBucket: "snapchat-clone-3297f.appspot.com",
  messagingSenderId: "104145108925",
  appId: "1:104145108925:web:0d11e441f4d1b878025cd4",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, storage, provider };
