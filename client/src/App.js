import Button from "react-bootstrap/Button";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/layout/Header";
import Home from "./components/pages/Home";
import About from "./components/pages/About";

import FilmState from "./context/films/FilmState";

const App = () => {
  return (
    <FilmState>
      <Router>
        <div className="App">
          <Header title="Film Finder" />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
          </Switch>
        </div>
      </Router>
    </FilmState>
  );
};

export default App;
