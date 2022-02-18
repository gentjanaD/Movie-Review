import React from "react";
import { Movie } from "../../Types/movieTypes";
import MovieTile from "../movietile/MovieTile";
import "./SearchResult.css";
type Props = {
  searchResults: Movie[];
  addToWatchList: (movie: any) => void;
  watchList: Movie[];
};

const SearchResult: React.FC<Props> = ({
  searchResults,
  addToWatchList,
  watchList,
}) => {
  if (searchResults.length < 1) return null;
  return (
    <div className="searchedMovies">
      {searchResults?.map((mov: Movie, index: number) => (
        <div key={index} className="searchedMovieTile">
          <MovieTile
            movie={mov}
            onList={true}
            watchList={watchList}
            addToWatchList={addToWatchList}
          />
        </div>
      ))}
    </div>
  );
};

export default SearchResult;
