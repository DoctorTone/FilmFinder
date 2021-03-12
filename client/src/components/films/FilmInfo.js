import React from "react";
import { Link } from "react-router-dom";

const FilmInfo = ({ location }) => {
  const { data } = location;

  return (
    <>
      <div className="container text-center">
        <h2>{data.name}</h2>
        <p>Starring:</p>
        <p>Year: {data.year}</p>
        <p>Genres: {data.genre}</p>
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
