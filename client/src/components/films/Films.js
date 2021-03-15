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
    <>
      <div className="container">
        {foundFilms.length !== 0 && (
          <div>
            <div>
              {foundFilms.map((film) => (
                <FilmItem key={film._id} film={film} />
              ))}
            </div>
            <div>
              <button type="button" className="btn btn-primary">
                Clear
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Films;
