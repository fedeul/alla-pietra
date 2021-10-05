import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD4CD8Uyz5LsGcEsJrRtkiIg7rv_2FAzJI",
  authDomain: "almacenpanadero.firebaseapp.com",
  projectId: "almacenpanadero",
  storageBucket: "almacenpanadero.appspot.com",
  messagingSenderId: "439195503589",
  appId: "1:439195503589:web:34c23c6899503d84ad7d0c",
};

const app = firebase.initializeApp(firebaseConfig);

export function getFirestore() {
  return firebase.firestore(app);
}
