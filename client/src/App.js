import Button from "react-bootstrap/Button";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/layout/Header";
import Intro from "./components/layout/Intro";
import SearchBar from "./components/layout/SearchBar";
import Footer from "./components/layout/Footer";

import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header title="Film Finder" />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
        </Switch>
        <Intro />
        <SearchBar />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
