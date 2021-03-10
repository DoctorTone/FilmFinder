import React from "react";
import FilterBar from "../layout/FilterBar";
import Films from "../films/Films";

const Home = () => {
  return (
    <div>
      <div className="text-center mt-3">
        <p>Welcome to the Vault of Horror!!</p>
        <p>
          If you are searching for a particular films and you think you may know
          all or some of the title, then use the search bar below.
        </p>
      </div>
      <FilterBar />
      <Films />
      <div className="mt-5">
        <p>
          If you would like to browse films by type then use the Browse menu
          option.
        </p>
      </div>
    </div>
  );
};

export default Home;
