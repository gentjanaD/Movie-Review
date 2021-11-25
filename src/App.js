import React, { useState, useEffect } from "react";
import { MovieList } from "./components/MovieList";
import { WatchList } from "./components/WatchList";
import { GetMovies } from "./Services/ApiClient";
import "./App.css";
const App = () => {
  const [movieList, setMovieList] = useState([]);
  const [watchList, setWatchList] = useState([]);

  const fetchMovies = () => {
    GetMovies().then((movies) => setMovieList(movies));
  };
  useEffect(() => {
    fetchMovies();
  }, []);

  const addToWatchList = (movie) => {
    watchList.includes(movie) ||
      setWatchList((prevState) => [...prevState, movie]);
    console.log("watch", watchList);
  };

  const deleteFromList = (movie) => {
    setWatchList((prevState) => {
      return prevState.includes(movie)
        ? prevState.filter((el) => movie !== el)
        : [...prevState, movie];
    });
  };

  return (
    <div className="all">
      <h1>See All Movies</h1>
      <MovieList
        movieList={movieList}
        deleteFromList={deleteFromList}
        addToWatchList={addToWatchList}
        onList={true}
      />
      <h1>See WatchList Movies</h1>
      <WatchList
        watchList={watchList}
        deleteFromList={deleteFromList}
        addToWatchList={addToWatchList}
        onList={false}
      />
    </div>
  );
};

export default App;
