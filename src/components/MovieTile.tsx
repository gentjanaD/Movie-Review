import React from "react";
import "../App.css";
import { Movie } from "../Types/movieTypes";

type Props = {
  addToWatchList: (movie: any) => void;
  onList: boolean;
  deleteFromList: (movie: any) => void;
  movie: Movie;
};

const MovieTile: React.FC<Props> = ({
  addToWatchList,
  onList,
  deleteFromList,
  movie,
}) => {
  return (
    <div className="movieTile">
      <img src={"https://image.tmdb.org/t/p/w300/" + movie.poster_path} />
      {onList ? (
        <button className="addButton" onClick={() => addToWatchList(movie)}>
          +
        </button>
      ) : (
        <button className="deleteButton" onClick={() => deleteFromList(movie)}>
          -
        </button>
      )}
    </div>
  );
};

export default MovieTile;
