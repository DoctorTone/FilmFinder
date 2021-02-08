import React from "react";

const FilmItem = ({ film }) => {
  return (
    <div>
      <p>Film : {film.name}</p>
    </div>
  );
};

export default FilmItem;
