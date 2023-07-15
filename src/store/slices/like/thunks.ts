import {
  addDoc,
  collection,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { AppDispatch } from "../../store";
import { db } from "../../../config/firebase";
import { setRepositoriesLiked } from "./likeSlice";

const likesCollectionRef = collection(db, "gh-repositories");

export const getLikedRepositories = (userId: string) => {
  return async (dispatch: AppDispatch) => {
    try {
      const response = await getDocs(likesCollectionRef);
      const data = response.docs.map((doc) => ({
        ...doc.data(),
        repo_likes: doc.data().repo_likes,
        id: doc.id,
      }));

      const likedRepositories = JSON.parse(data[0].repo_likes);
      dispatch(
        setRepositoriesLiked({
          likedRepositories: likedRepositories,
          collectionId: data[0].id,
        })
      );
    } catch (err) {
      console.log(err);
    }
  };
};

export const addLikedRepositories = (
  userId: string,
  likedRepositories: string
) => {
  return async (dispatch: AppDispatch) => {
    try {
      await addDoc(likesCollectionRef, {
        user_id: userId,
        repo_likes: likedRepositories,
      });

      dispatch(getLikedRepositories(userId));
    } catch (err) {
      console.log(err);
    }
  };
};

export const updateLikedRepositories = (
  likedRepositories: string,
  id: string
) => {
  return async (dispatch: AppDispatch) => {
    try {
      const likedRepositoriesDoc = doc(db, "gh-repositories", id);
      await updateDoc(likedRepositoriesDoc, { repo_likes: likedRepositories });

      dispatch(
        setRepositoriesLiked({
          likedRepositories: JSON.parse(likedRepositories),
          collectionId: id,
        })
      );
    } catch (err) {
      console.log(err);
    }
  };
};
