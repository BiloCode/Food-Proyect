import firebase from "firebase";

import "firebase/auth";
import "firebase/storage";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBNWCmkU75iSA1o1_2BDS4UmFfdS6xgdXQ",
  authDomain: "food-shop-ac3c2.firebaseapp.com",
  projectId: "food-shop-ac3c2",
  storageBucket: "food-shop-ac3c2.appspot.com",
  messagingSenderId: "887282516636",
  appId: "1:887282516636:web:257589e0513525e6f3a359",
  measurementId: "G-JGWNE33SNT",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}
