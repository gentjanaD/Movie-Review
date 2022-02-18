import React from "react";
import "./SearchBar.css";
import { MdSearch } from "react-icons/md";
type Props = {
  onChangeHandlerFunc: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
const SearchBar: React.FC<Props> = ({ onChangeHandlerFunc }) => {
  return (
    <div className="searchBar ">
      <input
        className="serachBarInput"
        type="text"
        placeholder="Search movies"
        onChange={onChangeHandlerFunc}
      />
      <MdSearch />
    </div>
  );
};

export default SearchBar;
