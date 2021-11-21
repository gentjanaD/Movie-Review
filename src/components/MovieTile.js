import React from "react";
import "../App.css";
export const MovieTile = ({
  addToWatchList,
  onList,
  deleteFromList,
  movie,
}) => {
  return (
    <div>
      <img src={"https://image.tmdb.org/t/p/w300/" + movie.poster_path} />
      {onList ? (
        <button className="button" onClick={() => addToWatchList(movie)}>
          Add To List
        </button>
      ) : (
        <button onClick={() => deleteFromList(movie)}>Remove Movie</button>
      )}
    </div>
  );
};
