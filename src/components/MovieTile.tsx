import React, { useState } from "react";
import "../App.css";
import { Movie } from "../Types/movieTypes";

type Props = {
  addToWatchList?: (movie: any) => void;
  onList: boolean;
  deleteFromList?: (movie: any) => void;
  movie: Movie;
  // isClicked: boolean;
};

const MovieTile: React.FC<Props> = ({
  addToWatchList,
  onList,
  deleteFromList,
  movie,
}) => {
  // const [isClicked, setIsClicked] = useState(false);
  // const onClickAddToWatchList = () => {
  //   addToWatchList(movie);
  //   setIsClicked((prevState) => !prevState);
  // };
  return (
    <div className="movieTile">
      <h3>{movie.title}</h3>
      <img src={"https://image.tmdb.org/t/p/w300/" + movie.poster_path} />
      <div>
        {onList ? (
          <button className="addButton" onClick={() => addToWatchList(movie)}>
            +
          </button>
        ) : (
          <button
            className="deleteButton"
            onClick={() => deleteFromList(movie)}
          >
            -
          </button>
        )}
        {/* {onList && isClicked(<button>added</button>)} */}
      </div>
    </div>
  );
};

export default MovieTile;
