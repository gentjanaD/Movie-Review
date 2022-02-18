import React, { useEffect, useState } from "react";
import "./MovieList.css";
import { Movie } from "../../Types/movieTypes";
import MovieTile from "../movietile/MovieTile";
import movieReducer from "../../redux/movieReducer";
type Props = {
  category: string;
  fetchedMovies: any;
  watchList: Movie[];
  addToWatchList: (movie: any) => void;
  filteredMovieTitles: string[];
  uniqueMovieData: Movie[];
};
const MovieList: React.FC<Props> = ({
  category,
  fetchedMovies,
  addToWatchList,
  watchList,
}) => {
  return (
    <div className="cat_movieList">
      {fetchedMovies &&
        fetchedMovies[category].map((movie: Movie, index: number) => (
          <MovieTile
            key={index}
            addToWatchList={addToWatchList}
            movie={movie}
            onList={true}
            watchList={watchList}
          />
        ))}
    </div>
  );
};
export default MovieList;
