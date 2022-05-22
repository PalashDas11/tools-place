// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// I used enviroment variable but is not working .
// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_apiKey,
//   authDomain: process.env.REACT_APP_authDomain,
//   projectId: process.env.REACT_APP_projectId,
//   storageBucket: process.env.REACT_APP_storageBucket,
//   messagingSenderId: process.env.REACT_APP_messagingSenderId,
//   appId: process.env.REACT_APP_appId,
//   measurementId: process.env.REACT_APP_measurementId,
// };
const firebaseConfig = {
  apiKey: "AIzaSyACDQMd1WjliXkzV5lfsomRco-xp8-i5Mc",
  authDomain: "tools-place.firebaseapp.com",
  projectId: "tools-place",
  storageBucket: "tools-place.appspot.com",
  messagingSenderId: "882212592349",
  appId: "1:882212592349:web:eedb7d4f3c95c132799934",
  measurementId: "G-1DK75T4KTK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;