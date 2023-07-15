import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import placeholder from "../assets/placeholder.jpg";
import { getRepositories } from "../store/slices/repository";
import CardRepository from "../components/CardRepository";
import { getLikedRepositories } from "../store/slices/like";

const UserDetail = () => {
  const dispatch = useDispatch<AppDispatch>();

  const selectedUser = useSelector(
    (state: RootState) => state.topUser
  ).selectedTopUser;

  const currentUser = useSelector((state: RootState) => state.user).user;
  const repositories = useSelector(
    (state: RootState) => state.repositories
  ).repositories;

  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    dispatch(getLikedRepositories(currentUser?.userId || ""));
    dispatch(getRepositories(selectedUser?.username || ""));
  }, [currentUser, dispatch, selectedUser]);

  const handleSearch = (e: any) => {
    setSearchTerm(e.target.value);
  };

  const filteredRepositories = repositories.filter((repo) =>
    repo.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-[2520px] mx-auto px-4 sm:px-2 md:px-10 xl:px-20 ">
      <div className="shadow-md p-6 rounded-md">
        <div className="flex items-center mt-8">
          <div className="shadow-md rounded-full overflow-hidden w-32 h-32">
            <img
              src={selectedUser?.avatarUrl || placeholder}
              alt="Profile Avatar"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="ml-8">
            <h1 className="text-3xl font-bold">{selectedUser?.name}</h1>
            <p className="text-gray-500">{selectedUser?.username}</p>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <div className="flex justify-between items-center mt-4">
          <h1 className="text-2xl font-bold">Repositories</h1>
          <input
            type="text"
            placeholder="Search repository"
            value={searchTerm}
            onChange={handleSearch}
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <ul
          className="
          pt-24 
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          md:grid-cols-3 
          lg:grid-cols-4 
          xl:grid-cols-5 
          2xl:grid-cols-6 
          gap-8
        "
        >
          {filteredRepositories.map((repository) => (
            <CardRepository
              key={repository.id}
              repository={repository}
              currentUser={currentUser}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UserDetail;
