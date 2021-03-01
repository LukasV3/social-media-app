import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import "./styles/index.scss";

import history from "./history";
import Login from "./components/login/Login";

const App = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Login} />
      </Switch>
    </Router>
  );
};

export default App;
