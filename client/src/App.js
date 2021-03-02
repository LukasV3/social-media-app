import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import "./styles/index.scss";

import history from "./history";
import Login from "./components/login/Login";
import SignUp from "./components/signup/SignUp";
import Feed from "./components/feed/Feed";

const App = () => {
  return (
    <Router history={history}>
      <div className="app-container">
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/signup" exact component={SignUp} />
          <Route path="/:id/feed" exact component={Feed} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
