// import firebase from "firebase";
const firebase = require("firebase");

var firebaseConfig = {
  apiKey: "AIzaSyBno6YJS-PHoSqoD9LPg1-foh0mPuXpdEc",
  authDomain: "serverdb-edf0a.firebaseapp.com",
  databaseURL:
    "https://serverdb-edf0a-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "serverdb-edf0a",
  storageBucket: "serverdb-edf0a.appspot.com",
  messagingSenderId: "30929677283",
  appId: "1:30929677283:web:06c25648f1899de702ced6",
  measurementId: "G-67JH67KTB6",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

// export default firebase;
module.exports = { firebase };
