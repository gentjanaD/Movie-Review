import React from "react";
import { MovieTile } from "./MovieTile";
export const WatchList = ({
  watchList,
  addToWatchList,
  deleteFromList,
  // onList,
}) => {
  return (
    <div className="movieList">
      {watchList &&
        watchList.map((movie, index) => (
          <MovieTile
            key={index}
            movie={movie}
            addToWatchList={addToWatchList}
            deleteFromList={deleteFromList}
            onList={false}
          />
        ))}
    </div>
  );
};
