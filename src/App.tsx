import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchDiscoverMovies, fetchMoviesByCatId } from "./redux/movieActions";
import { fetchCategories } from "./redux/categoryActions";
import "./App.css";
import { MovieList } from "./components/movieList";
import { Movie, Category, State } from "./Types/movieTypes";
import { WatchList } from "./components/WatchList";

const App: React.FC = () => {
  const dispatch = useDispatch();
  const [watchList, setWatchList] = useState<Movie[]>([]);

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
  return (
    <div className="app">
      {Object.keys(fetchedMovies).map((category: string, index: number) => (
        <div
          className="category__movieList"
          style={{ color: "white" }}
          key={index}
        >
          <h1>{category}</h1>
          <div className="app_movieList">
            <MovieList
              category={category}
              fetchedMovies={fetchedMovies}
              deleteFromList={deleteFromList}
              addToWatchList={addToWatchList}
              onList={false}
            />
          </div>
        </div>
      ))}
      <div className="app_watchList">
        <h1>Your WatchList</h1>
        <WatchList
          watchList={watchList}
          deleteFromList={deleteFromList}
          addToWatchList={addToWatchList}
          onList={false}
        />
      </div>
    </div>
  );
};

export default App;
