import Button from "react-bootstrap/Button";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/layout/Header";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import AddFilm from "./components/pages/AddFilm";
import Login from "./components/pages/Login";

import FilmState from "./context/films/FilmState";
import AuthState from "./context/auth/AuthState";
import setAuthToken from "./utils/setAuthToken";

const App = () => {
  return (
    <AuthState>
      <FilmState>
        <Router>
          <Header title="Film Finder" />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/add" component={AddFilm} />
              <Route exact path="/login" component={Login} />
            </Switch>
          </div>
        </Router>
      </FilmState>
    </AuthState>
  );
};

export default App;
