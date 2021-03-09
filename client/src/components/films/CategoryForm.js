import React from "react";

const CategoryForm = ({ buttonText }) => {
  return (
    <>
      <div>
        <button className="btn btn-primary" type="submit">
          {buttonText}
        </button>
      </div>
    </>
  );
};

export default CategoryForm;
