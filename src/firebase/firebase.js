import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBEE7abbh82JnTskkO6oUNZcrOgDQak1VA",
  authDomain: "trajectory-of-life.firebaseapp.com",
  projectId: "trajectory-of-life",
  storageBucket: "trajectory-of-life.appspot.com",
  messagingSenderId: "960764474325",
  appId: "1:960764474325:web:fde8eb4249ea8bde6d835c",
  measurementId: "G-28CJL85318",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
export const auth = firebase.auth();
export const db = firebase.firestore();
export const storage = firebase.storage();
