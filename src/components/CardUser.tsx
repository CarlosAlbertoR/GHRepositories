import React from "react";
import { TopUser } from "../models";
import { useNavigate } from "react-router-dom";
import { setSelectedTopUser } from "../store/slices/top-user";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store/store";

interface CardUserProps {
  user: TopUser;
}

const CardUser: React.FC<CardUserProps> = ({ user }) => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const handleClick = () => {
    dispatch(setSelectedTopUser({ selectedTopUser: user }));
    navigate(`/user`);
  };

  return (
    <div className="col-span-1 cursor-pointer group">
      <div
        className="flex flex-col items-center gap-2 w-full p-4 border border-gray-300 rounded-md shadow-md relative"
        onClick={handleClick}
      >
        <img
          src={user.avatarUrl}
          alt={user.name}
          className="w-24 h-24 rounded-full object-cover"
        />
        <h3 className="text-xl font-semibold text-center truncate w-full">
          {user.name}
        </h3>
        <p className="text-gray-500">@{user.username}</p>
        <p className="text-gray-500">Repositories: {user.repositoryCount}</p>
      </div>
    </div>
  );
};

export default CardUser;
