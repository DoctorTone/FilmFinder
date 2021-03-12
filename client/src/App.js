import Button from "react-bootstrap/Button";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/layout/Header";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import AddFilm from "./components/pages/AddFilm";
import Browse from "./components/pages/Browse";
import Login from "./components/pages/Login";
import FilmInfo from "./components/films/FilmInfo";

import FilmState from "./context/films/FilmState";
import AuthState from "./context/auth/AuthState";
import MessageState from "./context/messaging/MessageState";
import setAuthToken from "./utils/setAuthToken";

const App = () => {
  return (
    <AuthState>
      <FilmState>
        <MessageState>
          <Router>
            <Header title="The Vault of Horror" />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/add" component={AddFilm} />
                <Route exact path="/browse" component={Browse} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/filmInfo" component={FilmInfo} />
              </Switch>
            </div>
          </Router>
        </MessageState>
      </FilmState>
    </AuthState>
  );
};

export default App;
