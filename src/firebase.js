
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBM2KiHN5CrCvUf2Hg0ZKrglYLRSt63Xg4",
  authDomain: "netflix-clone-be9ee.firebaseapp.com",
  projectId: "netflix-clone-be9ee",
  storageBucket: "netflix-clone-be9ee.appspot.com",
  messagingSenderId: "39852196479",
  appId: "1:39852196479:web:22d5a1550580c7bdcf354a",
  measurementId: "G-ZYGDF7H95H"
};


const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app)
export const db = getFirestore(app);