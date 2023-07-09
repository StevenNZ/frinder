// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase} from "firebase/database"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCyuKz4U0TiKw6C7TAMbPE-FjgBo2tCGXY",
  authDomain: "frinder-14035.firebaseapp.com",
  databaseURL: "https://frinder-14035-default-rtdb.firebaseio.com/",
  projectId: "frinder-14035",
  storageBucket: "frinder-14035.appspot.com",
  messagingSenderId: "409221857765",
  appId: "1:409221857765:web:2143e804461ccb46cdef0c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)

// initialize realtime database
export const db = getDatabase(app);
