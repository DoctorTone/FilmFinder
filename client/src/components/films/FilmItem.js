import React from "react";
import { Link } from "react-router-dom";

const FilmItem = ({ film }) => {
  return (
    <>
      <div className="row mb-3">
        <div className="col-6 text-center">
          <span>{film.name}</span>
        </div>
        <div className="col-3 text-left">
          <Link
            className="btn btn-success"
            to={{ pathname: "/filmInfo", data: film }}
          >
            Details
          </Link>
        </div>
      </div>
    </>
  );
};

export default FilmItem;
