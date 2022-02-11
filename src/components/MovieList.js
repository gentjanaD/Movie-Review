import React from "react";
import { MovieTile } from "./MovieTile";

export const MovieList = ({
  movieList,
  addToWatchList,
  deleteFromList,
  onList,
}) => {
  return (
    <div className="movieList">
      {movieList &&
        movieList.map((movie, index) => (
          <MovieTile
            key={index}
            movie={movie}
            addToWatchList={addToWatchList}
            onList={true}
            deleteFromList={deleteFromList}
          />
        ))}
    </div>
  );
};
