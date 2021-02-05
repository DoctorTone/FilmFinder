import React, { useRef } from "react";

const SearchBar = () => {
  const text = useRef("");

  const onChange = (e) => {
    searchFilms(text.current.value);
  };

  return (
    <div>
      <form action="">
        <label htmlFor="search">Find a film</label>
        <input
          id="search"
          type="search"
          placeholder="Enter film name..."
          ref={text}
          onChange={onChange}
        />
      </form>
    </div>
  );
};

export default SearchBar;
