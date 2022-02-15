import React from "react";
import "../App.css";
import { Movie } from "../Types/movieTypes";
import MovieTile from "./MovieTile";
// import * as CSS from "csstype";
type Props = {
  category: string;
  fetchedMovies: any;
  addToWatchList: (movie: any) => void;
};
const MovieList: React.FC<Props> = ({
  category,
  fetchedMovies,
  addToWatchList,
}) => {
  return (
    <div className="catMovieList">
      <div
        className="cat_movieList"
        // style={{ color: "white", overflow: "scroll" }}
      >
        {fetchedMovies &&
          fetchedMovies[category].map((movie: Movie, index: number) => (
            <MovieTile
              key={index}
              addToWatchList={addToWatchList}
              movie={movie}
              onList={true}
            />
          ))}
      </div>
    </div>
  );
};

// const styles: { [key: string]: React.CSSProperties } = {
//   container: {
//     overflow: scroll,
//   },
// };

export default MovieList;
