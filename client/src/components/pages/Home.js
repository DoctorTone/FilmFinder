import React from "react";
import SearchBar from "../layout/SearchBar";
import Films from "../films/Films";

const Home = () => {
  return (
    <div>
      <div className="text-center mt-3">
        <p>Welcome to the film finder</p>
        <p>Search for a film you like below.</p>
      </div>
      <SearchBar />
      <Films />
      <div className="mt-5">
        <p>
          If you don't know the name of the film or you just want to see what's
          available, the check the browse option at the top.
        </p>
      </div>
    </div>
  );
};

export default Home;
