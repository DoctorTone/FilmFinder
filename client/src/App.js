import Button from "react-bootstrap/Button";
import Header from "./components/layout/Header";
import Intro from "./components/layout/Intro";
import SearchBar from "./components/layout/SearchBar";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Header title="Film Finder" />
      <Intro />
      <SearchBar />
    </div>
  );
};

export default App;
