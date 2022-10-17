import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPs6iMnFA9E4Ov9KoHtE1GUZd226QVls0",
  authDomain: "resturantfoodpalace.firebaseapp.com",
  projectId: "resturantfoodpalace",
  storageBucket: "resturantfoodpalace.appspot.com",
  messagingSenderId: "348250729851",
  appId: "1:348250729851:web:a1ddfdfec44cf8fc0221de",
  measurementId: "G-8DR123KR9J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const firestore = getFirestore(app);

export {auth, firestore, analytics};