import React, { useContext, useRef } from "react";
import FilmContext from "../../context/films/filmContext";

const FilterBar = () => {
  const filmContext = useContext(FilmContext);
  const text = useRef("");

  const { foundFilms, filterFilms } = filmContext;

  const onChange = (e) => {
    if (text.current.value !== "") {
      filterFilms(e.target.value);
    }
  };

  return (
    <form action="">
      <label htmlFor="search">Find a film</label>
      <input
        id="search"
        name="search"
        type="search"
        placeholder="Enter film name..."
        ref={text}
        onChange={onChange}
      />
    </form>
  );
};

export default FilterBar;
