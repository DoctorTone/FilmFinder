import React from "react";
import { Link } from "react-router-dom";

const Browse = () => {
  return (
    <>
      <div className="container mt-5">
        <p>Use the options below to see all the films in that category.</p>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-6">
            <Link
              className="btn btn-primary"
              to={{ pathname: "/category", data: "197" }}
            >
              1970's
            </Link>
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
