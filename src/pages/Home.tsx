import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { AppDispatch, RootState } from "../store/store";
import { getTopUsers, getUsersByUsername } from "../store/slices/top-user";
import CardUser from "../components/CardUser";
import { FaSearch } from "react-icons/fa";
import { BsExclamationCircleFill } from "react-icons/bs";

const Home = () => {
  const dispatch = useDispatch<AppDispatch>();

  const currentUser = useSelector((state: RootState) => state.user).user;
  const topUsers = useSelector((state: RootState) => state.topUser).topUsers;

  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    dispatch(getTopUsers());
  }, [currentUser, dispatch]);

  const handleSearch = () => {
    dispatch(getUsersByUsername(searchTerm));
  };

  const emptyState = (
    <div className="flex items-center justify-center bg-white rounded-md shadow-md h-32 mt-24">
      <BsExclamationCircleFill className="text-4xl text-red-500 mr-4" />
      <p className="text-gray-500">No users found. Please try again.</p>
    </div>
  );

  return (
    <div className="max-w-[2520px] mx-auto px-4 sm:px-2 md:px-10 xl:px-20 ">
      <div className="flex justify-between items-center mt-4">
        <h1 className="text-2xl font-bold">Top Users</h1>
        <div className="relative flex items-center">
          <input
            type="text"
            placeholder="Search by Github username"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-72"
          />
          <button
            onClick={handleSearch}
            className="absolute right-2 p-2 bg-blue-500 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <FaSearch />
          </button>
        </div>
      </div>

      {topUsers.length === 0 ? (
        emptyState
      ) : (
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
          {topUsers.map((user) => (
            <CardUser key={user.username} user={user} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default Home;
