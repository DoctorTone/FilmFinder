import Button from "react-bootstrap/Button";
import Header from "./components/layout/Header";
import Intro from "./components/layout/Intro";
import SearchBar from "./components/layout/SearchBar";
import Footer from "./components/layout/Footer";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Header title="Film Finder" />
      <Intro />
      <SearchBar />
      <Footer />
    </div>
  );
};

export default App;
