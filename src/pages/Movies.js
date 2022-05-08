import React, { useEffect, useState } from "react";
import MainGrid from "../components/MainGrid";
import Nav from "../components/Nav";
import SearchBar from "../components/SearchBar";

import data from "../data.json";

const Movies = () => {
  const [movies, setMovies] = useState();

  useEffect(() => {
    const filteredMovies = data.filter((item) => {
      return item.category === "Movie";
    });

    setMovies(filteredMovies);
  }, []);

  return (
    <div className="flex flex-col lg:flex-row h-screen">
      <Nav currentPage="movies" />
      <div className="flex-1 overflow-x-hidden">
        <SearchBar />
        <h1 className="text-heading-l font-light mb-[38px] pl-4 md:pl-6 lg:pl-0">
          Movies
        </h1>
        {movies && <MainGrid data={movies} />}
      </div>
    </div>
  );
};

export default Movies;
