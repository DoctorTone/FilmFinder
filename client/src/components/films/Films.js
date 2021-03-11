import React, { useContext, useEffect } from "react";
import FilmContext from "../../context/films/filmContext";
import FilmState from "../../context/films/FilmState";
import FilmItem from "./FilmItem";

const Films = () => {
  const filmContext = useContext(FilmContext);

  const { foundFilms, getFilms } = filmContext;

  useEffect(() => {
    getFilms();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="container">
      {foundFilms !== null
        ? foundFilms.map((film) => <FilmItem key={film._id} film={film} />)
        : null}
    </div>
  );
};

export default Films;
