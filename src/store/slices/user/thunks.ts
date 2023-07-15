import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

import { auth, githubProvider, googleProvider } from "../../../config/firebase";
import { AppDispatch } from "../../store";
import { setUser } from "./userSlice";

export const signUpWithEmailAndPassword = (email: string, password: string) => {
  return async (dispatch: AppDispatch) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password).then(
        (userCredential) => {
          const user = userCredential.user;
          dispatch(
            setUser({
              displayName: user.displayName,
              email: user.email,
              photoUrl: user.photoURL,
              userId: user.uid,
            })
          );
        }
      );
    } catch (error) {
      console.log("Error al registrar usuario:", error);
    }
  };
};

export const loginWithEmailAndPassword = (email: string, password: string) => {
  return async (dispatch: AppDispatch) => {
    try {
      await signInWithEmailAndPassword(auth, email, password).then(
        (userCredential) => {
          const user = userCredential.user;
          dispatch(
            setUser({
              displayName: user.displayName,
              email: user.email,
              photoUrl: user.photoURL,
              userId: user.uid,
            })
          );
        }
      );
    } catch (err) {
      console.log(err);
    }
  };
};

export const loginWithGoogle = () => {
  return async (dispatch: AppDispatch) => {
    try {
      await signInWithPopup(auth, googleProvider).then((userCredential) => {
        const user = userCredential.user;
        dispatch(
          setUser({
            displayName: user.displayName,
            email: user.email,
            photoUrl: user.photoURL,
            userId: user.uid,
          })
        );
      });
    } catch (err) {
      console.log(err);
    }
  };
};

export const loginWithGithub = () => {
  return async (dispatch: AppDispatch) => {
    try {
      await signInWithPopup(auth, githubProvider).then((userCredential) => {
        const user = userCredential.user;
        dispatch(
          setUser({
            displayName: user.displayName,
            email: user.email,
            photoUrl: user.photoURL,
            userId: user.uid,
          })
        );
      });
    } catch (err) {
      console.log(err);
    }
  };
};

export const logout = () => {
  return async (dispatch: AppDispatch) => {
    try {
      await signOut(auth);
      dispatch(setUser(null));
    } catch (err) {
      console.log(err);
    }
  };
};
