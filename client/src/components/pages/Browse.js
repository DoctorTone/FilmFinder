import React from "react";
import CategoryForm from "../films/CategoryForm";

const Browse = () => {
  return (
    <>
      <div className="container mt-5">
        <p>Use the options below to see all the films in that category.</p>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-6">
            <CategoryForm buttonText="1970's" />
          </div>
          <div className="col-6">
            <button className="btn btn-primary" type="button">
              1980's
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Browse;
