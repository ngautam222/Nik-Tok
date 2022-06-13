import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDZEvudZhaepJBDA7H6aS1j-pFjFb4lcwQ",
  authDomain: "nik-tok.firebaseapp.com",
  projectId: "nik-tok",
  storageBucket: "nik-tok.appspot.com",
  messagingSenderId: "707564283023",
  appId: "1:707564283023:web:4aedbc3f5994de4e0e7cfa"
};
const firebaseapp = firebase.initializeApp(firebaseConfig);

const db = firebaseapp.firestore();
export default db;