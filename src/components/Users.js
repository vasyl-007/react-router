import React from "react";
import { Switch, Route, useParams, useHistory, Link } from "react-router-dom";
import { Home } from "./Home";
import { BlogPost } from "./BlogPost";

export const Users = () => {
  let { slug } = useParams();

  let history = useHistory();
  function handleClick() {
    history.push("/");
  }
  return (
    <div>
      <h2>Users page</h2>

      <button type="button" onClick={handleClick}>
        Go home
      </button>

      <div>Now showing post {slug}</div>
      <Link to="/blog/:slug">Blog</Link>

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/blog/:slug">
          <BlogPost />
        </Route>
      </Switch>
    </div>
  );
};
