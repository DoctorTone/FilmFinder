import React from "react";

const FilmItem = ({ film }) => {
  return (
    <>
      <div className="col-6 text-center">
        <span>{film.name}</span>
      </div>
      <div className="col-3 text-left">
        <button type="button" className="btn btn-success">
          Details
        </button>
      </div>
    </>
  );
};

export default FilmItem;
