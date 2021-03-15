import React, { useContext } from "react";
import FilmContext from "../../context/films/filmContext";

const CategoryForm = ({ buttonText }) => {
  const filmContext = useContext(FilmContext);

  const { filterFilmCategory } = filmContext;

  const onSubmit = (e) => {
    e.preventDefault();

    filterFilmCategory("year", "197");
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <button className="btn btn-primary" type="submit">
          {buttonText}
        </button>
      </form>
    </>
  );
};

export default CategoryForm;
