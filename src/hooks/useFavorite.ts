import { useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Repository, SafeUser } from "../models";
import { AppDispatch, RootState } from "../store/store";
import { updateLikedRepositories } from "../store/slices/like";
import { toast } from "react-hot-toast";

interface IUseFavorite {
  repository: Repository;
  currentUser?: SafeUser | null;
}

const useFavorite = ({ repository, currentUser }: IUseFavorite) => {
  const dispatch = useDispatch<AppDispatch>();

  const likes = useSelector((state: RootState) => state.likes);

  const hasFavorited = useMemo(() => {
    return likes.likedRepositories.find((repo) => repo.id === repository.id);
  }, [repository, likes.likedRepositories]);

  const toggleFavorite = useCallback(
    async (e: React.MouseEvent<HTMLDivElement>) => {
      e.stopPropagation();

      if (!currentUser) return;

      try {
        if (hasFavorited) {
          const updatedLikes = likes.likedRepositories.filter(
            (repo) => repo.id !== repository.id
          );
          dispatch(
            updateLikedRepositories(
              JSON.stringify(updatedLikes),
              likes.collectionId
            )
          ).then(() => {
            toast.success("Unliked repository!");
          });
        } else {
          const updatedLikes = [...likes.likedRepositories, repository];
          dispatch(
            updateLikedRepositories(
              JSON.stringify(updatedLikes),
              likes.collectionId
            )
          ).then(() => {
            toast.success("Liked repository!");
          });
        }
      } catch {
        toast.error("Something went wrong!");
      }
    },
    [currentUser, hasFavorited, repository, likes, dispatch]
  );

  return { hasFavorited, toggleFavorite };
};

export default useFavorite;
