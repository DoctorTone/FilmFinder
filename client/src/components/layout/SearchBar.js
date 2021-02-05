import React, { useRef, useContext } from "react";
import FilmContext from "../../context/films/filmContext";

const SearchBar = () => {
  const text = useRef("");

  const filmContext = useContext(FilmContext);

  const { searchFilms } = filmContext;

  const onChange = (e) => {
    // DEBUG
    console.log("Text = ", text.current.value);

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
