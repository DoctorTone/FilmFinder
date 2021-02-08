import React, { useContext } from "react";
import FilmContext from "../../context/films/filmContext";
import FilmState from "../../context/films/FilmState";
import FilmItem from "./FilmItem";

const Films = () => {
  const filmContext = useContext(FilmContext);

  const { foundFilms } = filmContext;

  return (
    <div>
      {foundFilms.map((film) => (
        <FilmItem key={film.id} film={film} />
      ))}
    </div>
  );
};

export default Films;
