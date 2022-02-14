import React, { useState } from "react";
import "../App.css";
import { Movie } from "../Types/movieTypes";
import MovieTile from "./MovieTile";
import { WatchList } from "./WatchList";
type Props = {
  category: string;
  fetchedMovies: any;
};
export const MovieList: React.FC<Props> = ({ category, fetchedMovies }) => {
  const [watchList, setWatchList] = useState<Movie[]>([]);

  const addToWatchList = (movie: Movie) => {
    watchList.includes(movie) ||
      setWatchList((prevState) => [...prevState, movie]);
  };

  const deleteFromList = (movie: Movie) => {
    setWatchList((prevState) => {
      return prevState.includes(movie)
        ? prevState.filter((el) => movie !== el)
        : [...prevState];
    });
  };
  return (
    <div className="catMovieList">
      <div className="cat_movieList">
        {fetchedMovies &&
          fetchedMovies[category].map((movie: Movie, index: number) => (
            <MovieTile
              key={index}
              addToWatchList={addToWatchList}
              deleteFromList={deleteFromList}
              movie={movie}
              onList={true}
            />
          ))}

        <h1>Your WatchList {watchList.length}</h1>
        <WatchList
          watchList={watchList}
          deleteFromList={deleteFromList}
          addToWatchList={addToWatchList}
          onList={false}
        />
      </div>
    </div>
  );
};
