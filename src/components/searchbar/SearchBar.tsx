import React, { useState } from "react";

export const SearchBar = () => {
  const [input, setInput] = useState("");

  const handleOnSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    //filtering
  };

  const onChangeHandler = (e: any) => {
    setInput(e.target.value);
  };

  return (
    <div>
      {console.log(input)}
      <form onSubmit={handleOnSubmit}>
        <input
          type="text"
          id="header-search"
          placeholder="Search movies"
          name="search"
          onChange={onChangeHandler}
          value={input}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};
