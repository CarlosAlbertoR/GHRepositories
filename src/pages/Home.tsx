import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { AppDispatch, RootState } from "../store/store";
import { getTopUsers } from "../store/slices/top-user";
import CardUser from "../components/CardUser";

const Home = () => {
  const dispatch = useDispatch<AppDispatch>();

  const currentUser = useSelector((state: RootState) => state.user).user;
  const topUsers = useSelector((state: RootState) => state.topUser).topUsers;

  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    dispatch(getTopUsers());
  }, [currentUser, dispatch]);

  const handleSearch = (e: any) => {
    setSearchTerm(e.target.value);
  };

  // const filteredUsers = topUsers.filter((user) =>
  //   user.name.toLowerCase().includes(searchTerm.toLowerCase())
  // );

  const filteredUsers = topUsers;

  return (
    <div className="max-w-[2520px] mx-auto px-4 sm:px-2 md:px-10 xl:px-20 ">
      <div className="flex justify-between items-center mt-4">
        <h1 className="text-2xl font-bold">Top Users</h1>
        <input
          type="text"
          placeholder="Search user"
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
        {filteredUsers.map((user) => (
          <CardUser key={user.username} user={user} />
        ))}
      </ul>
    </div>
  );
};

export default Home;
