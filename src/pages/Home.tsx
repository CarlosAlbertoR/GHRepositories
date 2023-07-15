import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import CardRepository from "../components/CardRepository";
import { getLikedRepositories } from "../store/slices/like";
import { getRepositories } from "../store/slices/repository";
import { AppDispatch, RootState } from "../store/store";

const Home = () => {
  const dispatch = useDispatch<AppDispatch>();

  const currentUser = useSelector((state: RootState) => state.user).user;
  const repositories = useSelector(
    (state: RootState) => state.repositories
  ).repositories;

  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    dispatch(getLikedRepositories(currentUser?.userId || ""));
    dispatch(getRepositories("CarlosAlbertoR"));
  }, [currentUser, dispatch]);

  const handleSearch = (e: any) => {
    setSearchTerm(e.target.value);
  };

  const filteredRepositories = repositories.filter((repo) =>
    repo.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-[2520px] mx-auto px-4 sm:px-2 md:px-10 xl:px-20 ">
      <h1>Mis Repositorios</h1>
      <input
        type="text"
        placeholder="Buscar repositorio"
        value={searchTerm}
        onChange={handleSearch}
      />

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
            id={repository.id}
            name={repository.name}
            description={repository.description}
            url={repository.url}
            currentUser={currentUser}
          />
        ))}
      </ul>
    </div>
  );
};

export default Home;
