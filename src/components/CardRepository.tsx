import React from "react";
import { GrBook } from "react-icons/gr";

import { Repository, SafeUser } from "../models";
import BookmarkButton from "./BookmarkButton";

interface CardRepositoryProps {
  currentUser: SafeUser | null;
  repository: Repository;
}

const CardRepository: React.FC<CardRepositoryProps> = ({
  repository,
  currentUser,
}) => {
  return (
    <div className="col-span-1 cursor-pointer group">
      <div
        className="flex flex-col items-center gap-2 w-full p-4 border border-gray-300 rounded-md shadow-md relative"
        onClick={() => window.open(repository.url, "_blank")}
      >
        <div className="absolute top-2 right-2">
          <BookmarkButton repository={repository} currentUser={currentUser} />
        </div>
        <div className="flex items-center justify-center w-12 h-12 bg-blue-500 text-white rounded-full">
          <GrBook className="text-2xl" />
        </div>
        <h3 className="text-xl font-semibold text-center truncate w-full">
          {repository.name}
        </h3>
        <p className="text-gray-500 break-words text-center">
          {repository.description}
        </p>
      </div>
    </div>
  );
};

export default CardRepository;
