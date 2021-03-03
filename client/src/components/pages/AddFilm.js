import React, { useEffect, useContext, useState } from "react";
import AuthContext from "../../context/auth/authContext";
import FilmContext from "../../context/films/filmContext";

const AddFilm = (props) => {
  const authContext = useContext(AuthContext);
  const filmContext = useContext(FilmContext);

  const { isAuthenticated } = authContext;
  const { addFilm } = filmContext;

  useEffect(() => {
    if (!isAuthenticated) {
      props.history.push("/Login");
    }
  }, [isAuthenticated, props.history]);

  const [film, setFilm] = useState({ name: "", year: null, genre: "Vampire" });
  const { name, year, genre } = film;

  const onChange = (e) => {
    setFilm({ ...film, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();

    addFilm({ name, year, genre });
  };

  return (
    <div>
      <p>Here you can add a film to the database.</p>
      <p>You must be a registered user and logged in to add films</p>
      <form onSubmit={onSubmit}>
        <div className="row mb-3">
          <label htmlFor="name" className="col-1 col-form-label">
            Name:
          </label>
          <div className="col-10">
            <input
              id="name"
              name="name"
              type="text"
              className="form-control"
              placeholder="film name..."
              onChange={onChange}
            />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="year" className="col-1 col-form-label">
            Year:
          </label>
          <div className="col-5">
            <input
              id="year"
              name="year"
              type="number"
              className="form-control"
              placeholder="film year..."
              onChange={onChange}
            />
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Add
        </button>
      </form>
    </div>
  );
};

export default AddFilm;
