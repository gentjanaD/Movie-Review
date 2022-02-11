import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { WatchList } from "./components/WatchList";
import { fetchMovies } from "./redux/movieActions";
import "./App.css";
import { MovieTile } from "./components/MovieTile";

const App = () => {
  const dispatch = useDispatch();
  const fetchedMovies = useSelector((state) => state.movies);
  const [watchList, setWatchList] = useState([]);

  useEffect(() => {
    dispatch(fetchMovies());
  }, []);

  console.log(fetchedMovies);

  const addToWatchList = (movie) => {
    watchList.includes(movie) ||
      setWatchList((prevState) => [...prevState, movie]);
  };

  const deleteFromList = (movie) => {
    setWatchList((prevState) => {
      return prevState.includes(movie)
        ? prevState.filter((el) => movie !== el)
        : [...prevState];
    });
  };

  return (
    <div className="all">
      <h1>Discover Movies {fetchedMovies.length}</h1>
      <div className="movieList">
        {fetchedMovies.map((movie, index) => (
          <MovieTile
            key={index}
            addToWatchList={addToWatchList}
            deleteFromList={deleteFromList}
            movie={movie}
            onList={true}
          />
        ))}
      </div>
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
