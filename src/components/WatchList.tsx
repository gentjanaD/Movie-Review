import React from "react";
import MovieTile from "./MovieTile";
import { Movie } from "../Types/movieTypes";
import "../App.css";
type Props = {
  watchList: Movie[];
  deleteFromList: (movie: any) => void;
};
export const WatchList: React.FC<Props> = ({ watchList, deleteFromList }) => {
  return (
    <div className="watchList">
      {watchList.map((movie, index) => (
        <MovieTile
          key={index}
          movie={movie}
          deleteFromList={deleteFromList}
          onList={false}
        />
      ))}
    </div>
  );
};
