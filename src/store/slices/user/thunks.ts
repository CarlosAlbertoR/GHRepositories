import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

import { auth, githubProvider, googleProvider } from "../../../config/firebase";
import { AppDispatch } from "../../store";
import { setUser } from "./userSlice";
import { toast } from "react-hot-toast";

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
              githubUserName: null,
            })
          );
        }
      );
    } catch {
      toast.error("Something went wrong!");
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
              githubUserName: null,
            })
          );
        }
      );
    } catch {
      toast.error("Something went wrong!");
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
            githubUserName: null,
          })
        );
      });
    } catch {
      toast.error("Something went wrong!");
    }
  };
};

export const loginWithGithub = () => {
  return async (dispatch: AppDispatch) => {
    try {
      await signInWithPopup(auth, githubProvider).then(
        (userCredential: any) => {
          const user = userCredential.user;
          const githubUsername = user.reloadUserInfo.screenName;

          dispatch(
            setUser({
              displayName: user.displayName,
              email: user.email,
              photoUrl: user.photoURL,
              userId: user.uid,
              githubUserName: githubUsername,
            })
          );
        }
      );
    } catch {
      toast.error("Something went wrong!");
    }
  };
};

export const logout = () => {
  return async (dispatch: AppDispatch) => {
    try {
      await signOut(auth);
      dispatch(setUser(null));
    } catch {
      toast.error("Something went wrong!");
    }
  };
};
