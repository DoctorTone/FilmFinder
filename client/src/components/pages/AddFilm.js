import React from "react";

const AddFilm = () => {
  return (
    <div>
      <p>Here you can add a film to the database.</p>
      <p>You must be a registered user to add films</p>
      <form action="">
        <div className="row mb-3">
          <label htmlFor="name" className="col-1 col-form-label">
            Name:
          </label>
          <div className="col-10">
            <input
              id="name"
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
