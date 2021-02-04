import React from "react";

const SearchBar = () => {
  return (
    <div>
      <form action="">
        <label htmlFor="search">Find a film</label>
        <input id="search" type="search" placeholder="Enter film name..." />
      </form>
    </div>
  );
};

export default SearchBar;
