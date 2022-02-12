import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { WatchList } from "./components/WatchList";
import { fetchMovies } from "./redux/movieActions";
import "./App.css";
import MovieTile from "./components/MovieTile";
import { Movie } from "./Types/movieTypes";

type State = {
  error: string;
  loading: boolean;
  movies: Movie[];
};
const App: React.FC = () => {
  const dispatch = useDispatch();
  // const fetchedMovies: Movie[] = useSelector((state) => state.movies);

  const fetchedMovies = useSelector((state: State) => state.movies);
  const [watchList, setWatchList] = useState<Movie[]>([]);

  useEffect(() => {
    dispatch(fetchMovies());
  }, []);

  console.log(fetchedMovies);

  const addToWatchList = (movie: Movie) => {
    watchList.includes(movie) ||
      setWatchList((prevState) => [...prevState, movie]);
  };

  const deleteFromList = (movie: Movie) => {
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
      />
    </div>
  );
};

export default App;
