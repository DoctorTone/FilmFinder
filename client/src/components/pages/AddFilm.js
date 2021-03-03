import React, { useEffect, useContext } from "react";
import AuthContext from "../../context/auth/authContext";

const AddFilm = (props) => {
  const authContext = useContext(AuthContext);

  const { isAuthenticated } = authContext;

  useEffect(() => {
    if (!isAuthenticated) {
      props.history.push("/Login");
    }
  }, [isAuthenticated, props.history]);

  return (
    <div>
      <p>Here you can add a film to the database.</p>
      <p>You must be a registered user and logged in to add films</p>
      <form action="">
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
            />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="year" className="col-1 col-form-label">
            Year:
          </label>
          <div className="col-5">
            <input
              id="name"
              name="year"
              type="number"
              className="form-control"
              placeholder="film year..."
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
