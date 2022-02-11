import React from "react";
import "../App.css";
export const MovieTile = ({
  addToWatchList,
  onList,
  deleteFromList,
  movie,
}) => {
  {
    console.log("hey", movie);
  }
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
