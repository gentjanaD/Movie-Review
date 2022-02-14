import React from "react";
import MovieTile from "./MovieTile";
import { Movie } from "../Types/movieTypes";
import "../App.css";
type Props = {
  watchList: Movie[];
  addToWatchList: (movie: any) => void;
  deleteFromList: (movie: any) => void;
  onList: boolean;
};
export const WatchList: React.FC<Props> = ({
  watchList,
  addToWatchList,
  deleteFromList,
}) => {
  return (
    <div className="watchList">
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
