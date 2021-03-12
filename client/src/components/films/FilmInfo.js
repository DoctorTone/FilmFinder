import React from "react";

const FilmInfo = ({ location }) => {
  const { data } = location;

  return (
    <div>
      <p>All the info about the film {data.name}</p>
    </div>
  );
};

export default FilmInfo;
