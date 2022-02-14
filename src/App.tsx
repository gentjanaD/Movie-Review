import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchDiscoverMovies, fetchMoviesByCatId } from "./redux/movieActions";
import { fetchCategories } from "./redux/categoryActions";
import "./App.css";
import { MovieList } from "./components/movieList";
import { Category, State } from "./Types/movieTypes";

const App: React.FC = () => {
  const dispatch = useDispatch();

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
    <div className="movieList">
      {Object.keys(fetchedMovies).map((category: string, index: number) => (
        <div style={{ color: "white" }} key={index}>
          {category}
          <MovieList category={category} fetchedMovies={fetchedMovies} />
        </div>
      ))}
    </div>
  );
};

export default App;
