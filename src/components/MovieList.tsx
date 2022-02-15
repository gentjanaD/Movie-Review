import React from "react";
import "../App.css";
import { Movie } from "../Types/movieTypes";
import MovieTile from "./MovieTile";
type Props = {
  category: string;
  fetchedMovies: any;
  addToWatchList: (movie: any) => void;
};
export const MovieList: React.FC<Props> = ({
  category,
  fetchedMovies,
  addToWatchList,
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
            />
          ))}
      </div>
    </div>
  );
};
