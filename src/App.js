import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import "./App.css";
import { Home } from "./components/Home";
import { Users } from "./components/Users";
import { About } from "./components/About";
import {Topics} from "./components/Topics";

function App() {
  return (
    <div>
      <h2>IT WORKS!</h2>

      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/topics">Topics</Link>
            </li>
          </ul>
        </nav>
      </div>

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/users">
          <Users />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/topics">
          <Topics />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
