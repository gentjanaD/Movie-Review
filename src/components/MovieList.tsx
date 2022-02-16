import React, { useEffect } from "react";
import "../App.css";
import { Movie } from "../Types/movieTypes";
import MovieTile from "./MovieTile";
type Props = {
  category: string;
  fetchedMovies: any;
  watchList: Movie[];
  addToWatchList: (movie: any) => void;
};
const MovieList: React.FC<Props> = ({
  category,
  fetchedMovies,
  addToWatchList,
  watchList,
}) => {
  return (
    <div className="catMovieList">
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
    </div>
  );
};
export default MovieList;
