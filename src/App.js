import React, { useState, useEffect } from "react";
import { GetMovies } from "./Services/ApiClient";
const App = () => {
  const [movieList, setMovieList] = useState([]);
  console.log("hi");

  const fetchMovies = () => {
    GetMovies().then((movies) => setMovieList(movies));
  };
  useEffect(() => {
    fetchMovies();
  }, [movieList]);

  return (
    <div>
      <h1>See All Movies</h1>
      {movieList.map((movie) => {
        return (
          <img src={"https://image.tmdb.org/t/p/w300/" + movie.poster_path} />
        );
      })}
    </div>
  );
};

export default App;
