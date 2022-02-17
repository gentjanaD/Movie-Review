import React, { useEffect } from "react";
import "./MovieList.css";
import { Movie } from "../../Types/movieTypes";
import MovieTile from "../movietile/MovieTile";
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
