import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyDlG6Bl0RDozx4cLw_4XY8NmAlJfH175Ok",
    authDomain: "e-ride1-6a967.firebaseapp.com",
    projectId: "e-ride1-6a967",
    storageBucket: "e-ride1-6a967.appspot.com",
    messagingSenderId: "664242566721",
    appId: "1:664242566721:web:f4f63b6623d8565c5478c0"
  };
  
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
