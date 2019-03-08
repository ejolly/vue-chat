import firebase from "firebase/app";
import firestore from "firebase/firestore";

var config = {
  apiKey: "AIzaSyAnbMiOfJpHsJgYb3K2PpFvaRsaABbw1h0",
  authDomain: "vue-chat-65c52.firebaseapp.com",
  databaseURL: "https://vue-chat-65c52.firebaseio.com",
  projectId: "vue-chat-65c52",
  storageBucket: "vue-chat-65c52.appspot.com",
  messagingSenderId: "903870457561"
};
const firebaseApp = firebase.initializeApp(config);
firebaseApp.firestore();

export default firebaseApp.firestore();
