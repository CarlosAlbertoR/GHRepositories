import { useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

import { SafeUser } from "../models";
import { AppDispatch, RootState } from "../store/store";
import { updateLikedRepositories } from "../store/slices/like";

interface IUseFavorite {
  repositoryId: string;
  currentUser?: SafeUser | null;
}

const useFavorite = ({ repositoryId, currentUser }: IUseFavorite) => {
  const dispatch = useDispatch<AppDispatch>();

  const likes = useSelector((state: RootState) => state.likes);

  const hasFavorited = useMemo(() => {
    return likes.likedRepositories.includes(repositoryId);
  }, [repositoryId, likes.likedRepositories]);

  const toggleFavorite = useCallback(
    async (e: React.MouseEvent<HTMLDivElement>) => {
      e.stopPropagation();

      if (!currentUser) return;

      try {
        if (hasFavorited) {
          const updatedLikes = likes.likedRepositories.filter(
            (id) => id !== repositoryId
          );
          dispatch(
            updateLikedRepositories(
              JSON.stringify(updatedLikes),
              likes.collectionId
            )
          );
        } else {
          const updatedLikes = [...likes.likedRepositories, repositoryId];
          console.log(
            updatedLikes,
            repositoryId,
            likes.likedRepositories,
            typeof likes
          );
          dispatch(
            updateLikedRepositories(
              JSON.stringify(updatedLikes),
              likes.collectionId
            )
          );
        }
      } catch (error) {
        console.log("Error toggling favorite:", error);
      }
    },
    [currentUser, hasFavorited, repositoryId, likes, dispatch]
  );

  return { hasFavorited, toggleFavorite };
};

export default useFavorite;
