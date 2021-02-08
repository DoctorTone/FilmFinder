import React from "react";
import Intro from "../layout/Intro";
import SearchBar from "../layout/SearchBar";
import Films from "../films/Films";
import Footer from "../layout/Footer";

const Home = () => {
  return (
    <div>
      <Intro />
      <SearchBar />
      <Films />
      <Footer />
    </div>
  );
};

export default Home;
