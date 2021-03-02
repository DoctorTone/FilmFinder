import React from "react";

const AddFilm = () => {
  return (
    <div>
      <p>Here you can add a film to the database.</p>
      <p>You must be a registered user to add films</p>
      <form action="">
        <div className="row">
          <label htmlFor="name" className="col-2 col-form-label">
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
      </form>
    </div>
  );
};

export default AddFilm;
