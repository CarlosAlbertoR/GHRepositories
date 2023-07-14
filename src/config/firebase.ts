import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBUcRd03Y8cSmAgSL5_kbNtOdNTNvFCTEI",
  authDomain: "gh-repositories.firebaseapp.com",
  projectId: "gh-repositories",
  storageBucket: "gh-repositories.appspot.com",
  messagingSenderId: "953956033735",
  appId: "1:953956033735:web:40386dea687f86b0144ae2",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
