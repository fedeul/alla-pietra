// import firebase from "firebase";

import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/database";

// const firebaseConfig = {
//   apiKey: process.env.APIKEY,
//   authDomain: process.env.authDomain,
//   projectId: process.env.projectId,
//   storageBucket: process.env.storageBucket,
//   messagingSenderId: process.env.messagingSenderId,
//   appId: process.env.appId,
// };

// const app = firebase.initializeApp(firebaseConfig);

// export function getFirestore() {
//   return firebase.firestore(app);
// }

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD4CD8Uyz5LsGcEsJrRtkiIg7rv_2FAzJI",
  authDomain: "almacenpanadero.firebaseapp.com",
  projectId: "almacenpanadero",
  storageBucket: "almacenpanadero.appspot.com",
  messagingSenderId: "439195503589",
  appId: "1:439195503589:web:34c23c6899503d84ad7d0c",
};

const app = initializeApp(firebaseConfig);

export function getFirestore() {
  return firebase.firestore(app);
}
