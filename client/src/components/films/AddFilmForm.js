import React, { useContext, useState } from "react";
import AuthContext from "../../context/auth/authContext";
import FilmContext from "../../context/films/filmContext";
import MessageContext from "../../context/messaging/messageContext";

const AddFilmForm = ({ authenticated }) => {
  const authContext = useContext(AuthContext);
  const filmContext = useContext(FilmContext);
  const messageContext = useContext(MessageContext);

  const { addFilm } = filmContext;
  const { showMessage } = messageContext;

  const [film, setFilm] = useState({ name: "", year: null, genre: "Vampire" });
  const { name, year, genre } = film;

  const onChange = (e) => {
    setFilm({ ...film, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    addFilm({ name, year, genre });
    showMessage("Film added to database", "info");
  };

  return (
    <div>
      <p>Here you can add a film to the database.</p>
      {!authenticated ? (
        <div>
          <p>You must be a registered user and logged in to add films.</p>
          <p>Go to the Login option to log in.</p>
        </div>
      ) : (
        <p>
          Simply enter the details below, all fields marked with an * are
          required
        </p>
      )}

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
          <div className="col-1">*</div>
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
        {authenticated ? (
          <button type="submit" className="btn btn-primary">
            Add
          </button>
        ) : (
          <button type="submit" className="btn btn-primary" disabled>
            Add
          </button>
        )}
      </form>
    </div>
  );
};

export default AddFilmForm;
