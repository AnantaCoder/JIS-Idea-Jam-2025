import { initializeApp } from "firebase/app";
import {
  signInWithPopup,
  GoogleAuthProvider,
  getAuth,
  OAuthCredential,
} from "firebase/auth";
// const firebaseConfig = {
//     apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
//     authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
//     projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
//     storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
//     messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
//     appId: import.meta.env.VITE_FIREBASE_APP_ID,
//     measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
// };

const firebaseConfig = {
  apiKey: "AIzaSyAAXc-ZypwR4AhzHzZ8WhNOp7AeoBlbS7M",
  authDomain: "cropsensedemo.firebaseapp.com",
  projectId: "cropsensedemo",
  storageBucket: "cropsensedemo.firebasestorage.app",
  messagingSenderId: "791905033600",
  appId: "1:791905033600:web:da167da54a1abb6a063565",
  measurementId: "G-ZTCB4VE414",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const GoogleSignInUser = async () => {
  return signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential: OAuthCredential | null =
        GoogleAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken;
      console.log(token);

      const user = result.user;
      console.log(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    });
};
