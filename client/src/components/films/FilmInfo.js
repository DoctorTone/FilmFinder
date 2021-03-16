import React from "react";
import { Link } from "react-router-dom";

const FilmInfo = ({ location: { data: film } }) => {
  return (
    <>
      <div className="container text-center">
        <h2>{film.name}</h2>
        <p>Starring:</p>
        <p>Year: {film.year}</p>
        <p>Genres: {film.genre}</p>
      </div>
      <div className="text-right">
        <Link className="btn btn-primary" to="/">
          Home
        </Link>
      </div>
    </>
  );
};

export default FilmInfo;
