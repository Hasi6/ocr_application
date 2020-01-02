import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDE_n49pWNQi6OMBCUFADcTeeXfX8NqBzM",
  authDomain: "uni-dating-app.firebaseapp.com",
  databaseURL: "https://uni-dating-app.firebaseio.com",
  projectId: "uni-dating-app",
  storageBucket: "uni-dating-app.appspot.com",
  messagingSenderId: "109105492154",
  appId: "1:109105492154:web:3258159cc4fb11f5025283"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
export const auth = firebase.auth;
export const storage = firebase.storage;
export const database = firebase.database;
