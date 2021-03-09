import React from "react";

const CategoryForm = ({ buttonText }) => {
  return (
    <>
      <form action="">
        <button className="btn btn-primary" type="submit">
          {buttonText}
        </button>
      </form>
    </>
  );
};

export default CategoryForm;
