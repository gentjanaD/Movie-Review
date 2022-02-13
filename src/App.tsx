import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { WatchList } from "./components/WatchList";
import { fetchDiscoverMovies, fetchMoviesByCatId } from "./redux/movieActions";
import { fetchCategories } from "./redux/categoryActions";
import "./App.css";
import MovieTile from "./components/MovieTile";
import { Movie, Category } from "./Types/movieTypes";

type State = {
  movieReducer: {
    error: string;
    loading: boolean;
    movies: Movie[];
    genre_ids: number;
  };
  categoryReducer: {
    error: string;
    loading: boolean;
    categories: Category[];
  };
};

const App: React.FC = () => {
  const dispatch = useDispatch();
  const [watchList, setWatchList] = useState<Movie[]>([]);
  const fetchedMovies = useSelector(
    (state: State) => state.movieReducer.movies
  );
  const fetchedCategories = useSelector(
    (state: State) => state.categoryReducer.categories
  );

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  useEffect(() => {
    fetchedCategories.forEach((cat: Category) => {
      dispatch(fetchMoviesByCatId(cat));
    });
    dispatch(fetchDiscoverMovies());
  }, [fetchedCategories]);

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

  console.log("allmovies", fetchedMovies);
  const categories = Object.entries(fetchedMovies);
  console.log(categories);
  return (
    <div className="all">
      {console.log("render")}
      <h1>Discover Movies {fetchedMovies && fetchedMovies.length}</h1>
      {/* <div className="movieList">
        {fetchedMovies &&
          fetchedMovies.map((movie, index) => (
            <MovieTile
              key={index}
              addToWatchList={addToWatchList}
              deleteFromList={deleteFromList}
              movie={movie}
              onList={true}
            />
          ))}
      </div> */}
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
