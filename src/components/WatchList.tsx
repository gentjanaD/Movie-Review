import React from "react";
import MovieTile from "./MovieTile";
import { Movie } from "../Types/movieTypes";

type Props = {
  watchList: Movie[];
  addToWatchList: (movie: any) => void;
  deleteFromList: (movie: any) => void;
};
export const WatchList: React.FC<Props> = ({
  watchList,
  addToWatchList,
  deleteFromList,
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
