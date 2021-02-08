import React, { useRef, useContext } from "react";
import FilmContext from "../../context/films/filmContext";

const SearchBar = () => {
  const text = useRef("");

  const filmContext = useContext(FilmContext);

  const { searchFilms, clearSearch } = filmContext;

  const onChange = (e) => {
    if (text.current.value !== "") {
      searchFilms(text.current.value);
    } else {
      clearSearch();
    }
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
