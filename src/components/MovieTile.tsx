import React, { useEffect, useState } from "react";
import "../App.css";
import { Movie } from "../Types/movieTypes";

type Props = {
  addToWatchList?: (movie: any) => void;
  onList: boolean;
  deleteFromList?: (movie: any) => void;
  movie: Movie;
  isClicked?: string;
};

const MovieTile: React.FC<Props> = ({
  addToWatchList,
  onList,
  deleteFromList,
  movie,
}) => {
  const [isClicked, setIsClicked] = useState(false);
  const onClickAddToWatchList = () => {
    addToWatchList(movie);
    setIsClicked((prev) => !prev);
  };
  const onClickDeleteFromWatchList = () => {
    deleteFromList(movie);
    setIsClicked((prev) => !prev);
    console.log(isClicked);
  };
  // useEffect(() => {
  //   console.log("is", isClicked);
  // }, [isClicked]);
  return (
    <div className="movieTile">
      <h3>{movie.title}</h3>
      <img src={"https://image.tmdb.org/t/p/w300/" + movie.poster_path} />
      <div>
        {onList ? (
          <button className="addButton" onClick={onClickAddToWatchList}>
            +
          </button>
        ) : (
          <button className="deleteButton" onClick={onClickDeleteFromWatchList}>
            -
          </button>
        )}
      </div>
    </div>
  );
};

export default MovieTile;
