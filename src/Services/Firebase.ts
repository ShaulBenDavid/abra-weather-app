// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  FacebookAuthProvider,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Types
export type FirebasePopupProps = {
  access_token?: string;
  code?: string;
  id_token?: string;
};

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyALZgkFddoJJ2lgKpGCJxMLdqnlUOewR3s",
  authDomain: "abra-weather-6a249.firebaseapp.com",
  projectId: "abra-weather-6a249",
  storageBucket: "abra-weather-6a249.appspot.com",
  messagingSenderId: "581735812148",
  appId: "1:581735812148:web:f128190eefc1f33f828e61",
  measurementId: "G-MBRDLMD829",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

const auth = getAuth();
// --- Google popup ---
export const signInWithGooglePopup = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const credential = GoogleAuthProvider.credentialFromResult(res);
    return {
      access_token: credential?.accessToken,
      code: credential?.providerId,
      id_token: credential?.idToken,
    };
  } catch (err) {
    console.log(err);
  }
};
// --- Facebook popup ---
export const signInWithFacebookPopup = async () => {
  const res = await signInWithPopup(auth, facebookProvider);
  console.log(res);
};
