import React, { useContext, useEffect } from "react";
import FilmContext from "../../context/films/filmContext";
import FilmItem from "./FilmItem";

const Category = ({ location: { data: searchText } }) => {
  const filmContext = useContext(FilmContext);

  const { filterFilmCategory, foundFilms } = filmContext;

  useEffect(() => {
    filterFilmCategory("year", searchText);
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div className="container text-center">
        <h2 className="mb-5"> Films by : 1970's</h2>
        {foundFilms.length !== 0 && (
          <div>
            <div>
              {foundFilms.map((film) => (
                <FilmItem key={film._id} film={film} />
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Category;
