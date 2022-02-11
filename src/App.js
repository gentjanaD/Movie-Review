import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { MovieList } from "./components/MovieList";
import { WatchList } from "./components/WatchList";
import { fetchMovies } from "./redux/movieActions";
import "./App.css";

const App = () => {
  const dispatch = useDispatch();
  const [watchList, setWatchList] = useState([]);
  const allMovies = useSelector((state) => state.movies);
  useEffect(() => {
    dispatch(fetchMovies());
  }, []);

  const addToWatchList = (movie) => {
    watchList.includes(movie) ||
      setWatchList((prevState) => [...prevState, movie]);
  };
  console.log("watchList", watchList);

  const deleteFromList = (movie) => {
    setWatchList((prevState) => {
      return prevState.includes(movie)
        ? prevState.filter((el) => movie !== el)
        : [...prevState, movie];
    });
  };

  return (
    <div className="all">
      <h1>Discover Movies {allMovies.length}</h1>
      <MovieList
        movieList={allMovies}
        deleteFromList={deleteFromList}
        addToWatchList={addToWatchList}
        onList={true}
      />
      <h1>Your WatchList {watchList.length}</h1>
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
