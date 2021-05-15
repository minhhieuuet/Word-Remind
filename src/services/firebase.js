import firebase from 'firebase'
var firebaseConfig = {
    apiKey: "AIzaSyA0hjDuuXGCWfUpsNYDt07nBLQ_S6F4uIw",
    authDomain: "word-remind.firebaseapp.com",
    projectId: "word-remind",
    storageBucket: "word-remind.appspot.com",
    messagingSenderId: "14912476679",
    appId: "1:14912476679:web:ac7bbce5c652b718ccfca2"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore()
const auth = firebase.auth()
const messaging = firebase.messaging()
export {
    db,
    auth,
    messaging
  }