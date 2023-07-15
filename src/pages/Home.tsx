import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { AppDispatch, RootState } from "../store/store";
import { getRepositories } from "../store/slices/repository";

const Home = () => {
  const dispatch = useDispatch<AppDispatch>();

  const repositories = useSelector(
    (state: RootState) => state.repositories
  ).repositories;

  const [searchTerm, setSearchTerm] = useState("");
  const [favoriteRepositories, setFavoriteRepositories] = useState([]);

  useEffect(() => {
    dispatch(getRepositories("CarlosAlbertoR"));
  }, [dispatch]);

  const handleSearch = (e: any) => {
    setSearchTerm(e.target.value);
  };

  const filteredRepositories = repositories.filter((repo) =>
    repo.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // const toggleFavorite = (repo) => {
  //   if (favoriteRepositories.includes(repo)) {
  //     // Si el repositorio ya está en la lista de favoritos, se quita
  //     setFavoriteRepositories(
  //       favoriteRepositories.filter((favorite) => favorite !== repo)
  //     );
  //   } else {
  //     // Si el repositorio no está en la lista de favoritos, se agrega
  //     setFavoriteRepositories([...favoriteRepositories, repo]);
  //   }
  // };

  return (
    <div>
      <h1>Mis Repositorios</h1>
      <input
        type="text"
        placeholder="Buscar repositorio"
        value={searchTerm}
        onChange={handleSearch}
      />

      <ul>
        {filteredRepositories.map((repo) => (
          <li key={repo.url}>
            <span>{repo.name}</span>
            {/* <button onClick={() => toggleFavorite(repo)}>
              {favoriteRepositories.includes(repo)
                ? "Quitar de favoritos"
                : "Agregar a favoritos"}
            </button> */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
