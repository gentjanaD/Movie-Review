import React from "react";
import { Movie } from "../../Types/movieTypes";
import MovieTile from "../movietile/MovieTile";
import "./SearchResult.css";
type Props = {
  searchResults: Movie[];
};

const SearchResult: React.FC<Props> = ({ searchResults }) => {
  if (searchResults.length < 1) return null;
  return (
    <div className="searchedMovies">
      {searchResults?.map((mov, index) => (
        <div key={index} className="searchedMovieTile">
          <MovieTile movie={mov} onList={true} />
        </div>
      ))}
    </div>
  );
};

export default SearchResult;
