import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyDof4f6Oom5jFzFOevCWq0eUS2R4dtHvrA",
  authDomain: "linkedin-clone-8760d.firebaseapp.com",
  projectId: "linkedin-clone-8760d",
  storageBucket: "linkedin-clone-8760d.appspot.com",
  messagingSenderId: "959037991549",
  appId: "1:959037991549:web:6c2c16a2e9429e513c1f14",
  measurementId: "G-KWNWV2XLDG"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
 