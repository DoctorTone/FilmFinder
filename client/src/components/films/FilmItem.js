import React from "react";

const FilmItem = ({ film }) => {
  return (
    <div>
      <span>Film : {film.name}</span>
      <button type="button" className="btn btn-success">
        Details
      </button>
    </div>
  );
};

export default FilmItem;
