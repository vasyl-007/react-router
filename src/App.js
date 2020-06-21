import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import "./App.css";
import { Home } from "./components/Home";
import { Users } from "./components/Users";
import { About } from "./components/About";

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
      </Switch>
    </div>
  );
}

export default App;
