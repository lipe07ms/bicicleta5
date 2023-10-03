import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyDJa2-LS_ndcP2yVqe_46qYbjk36GuFLhQ",
  authDomain: "blibioteca-eletro.firebaseapp.com",
  databaseURL: "https://blibioteca-eletro-default-rtdb.firebaseio.com",
  projectId: "blibioteca-eletro",
  storageBucket: "blibioteca-eletro.appspot.com",
  messagingSenderId: "897908962688",
  appId: "1:897908962688:web:f74b4307af42d0317f3d65"
};


firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
