import React from "react";
import { SafeUser } from "../models";
import { FaBookmark, FaRegBookmark } from "react-icons/fa";
import useFavorite from "../hooks/useFavorite";

interface BookmarkButtonProps {
  repositoryId: string;
  currentUser?: SafeUser | null;
}

const BookmarkButton: React.FC<BookmarkButtonProps> = ({
  currentUser,
  repositoryId,
}) => {
  const { hasFavorited, toggleFavorite } = useFavorite({
    repositoryId,
    currentUser,
  });

  return (
    <div
      className="relative hover:opacity-80 transition cursor-pointer"
      onClick={toggleFavorite}
    >
      {hasFavorited ? (
        <FaBookmark className="text-blue-500 text-2xl cursor-pointer" />
      ) : (
        <FaRegBookmark className="text-gray-400 text-2xl cursor-pointer" />
      )}
    </div>
  );
};

export default BookmarkButton;
