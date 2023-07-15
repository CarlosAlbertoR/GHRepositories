import { SafeUser } from "../models";

interface IUseFavorite {
  repositoryId: string;
  currentUser?: SafeUser | null;
}

const useFavorite = ({ repositoryId, currentUser }: IUseFavorite) => {
  const hasFavorited = false;
  const toggleFavorite = () => {};

  return { hasFavorited, toggleFavorite };
};

export default useFavorite;
