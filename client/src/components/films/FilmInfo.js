import React from "react";

const FilmInfo = ({ location }) => {
  const { data } = location;

  return (
    <div className="text-center">
      <h2>{data.name}</h2>
    </div>
  );
};

export default FilmInfo;
