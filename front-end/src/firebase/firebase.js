// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCpILt29AByIX7QkSBXxHDk1v4Bl4Kf0_8",
  authDomain: "rxseek-b60ba.firebaseapp.com",
  projectId: "rxseek-b60ba",
  storageBucket: "rxseek-b60ba.appspot.com",
  messagingSenderId: "814418475338",
  appId: "1:814418475338:web:0233f20411cc68f17329b3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app,auth };