import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchDiscoverMovies, fetchMoviesByCatId } from "./redux/movieActions";
import { fetchCategories } from "./redux/categoryActions";
import "./App.css";
import MovieList from "./components/movielist/MovieList";
import { Movie, Category, State } from "./Types/movieTypes";
import { WatchList } from "./components/watchlist/WatchList";
import logo from "../public/assets/logo_gold.png";
const App: React.FC = () => {
  const dispatch = useDispatch();
  const [watchList, setWatchList] = useState<Movie[]>([]);
  const addToWatchList = (movie: Movie) => {
    watchList.map((mov) => mov.title).includes(movie.title) ||
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
      <div className="logo_div">
        <img src={logo} className="logo_img" />
      </div>
      <div className="app_watchList">
        {watchList.length > 0 && (
          <div>
            <h1>WatchList</h1>
            <WatchList watchList={watchList} deleteFromList={deleteFromList} />
          </div>
        )}
      </div>
      {Object.keys(fetchedMovies).map((category: string, index: number) => (
        <div className="app__categories" style={{ color: "white" }} key={index}>
          <h1>{category}</h1>
          <div className="app_movieList">
            <MovieList
              category={category}
              fetchedMovies={fetchedMovies}
              addToWatchList={addToWatchList}
              watchList={watchList}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;
