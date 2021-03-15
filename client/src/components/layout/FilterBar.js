import React, { useContext, useRef, useEffect } from "react";
import FilmContext from "../../context/films/filmContext";

const FilterBar = () => {
  const filmContext = useContext(FilmContext);
  const text = useRef("");

  const { foundFilms, filterFilms, clearFilter } = filmContext;

  useEffect(() => {
    if (foundFilms.length === 0) {
      text.current.value = "";
    }
  });

  const onChange = (e) => {
    if (text.current.value !== "") {
      filterFilms(e.target.value);
    } else {
      clearFilter();
    }
  };

  return (
    <form action="" className="mb-3">
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
