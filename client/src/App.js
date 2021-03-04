import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import "./styles/index.scss";

import history from "./history";
import Login from "./components/login/Login";
import SignUp from "./components/signup/SignUp";
import Feed from "./components/feed/Feed";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import Friends from "./components/friends/Friends";

const App = () => {
  return (
    <Router history={history}>
      <div className="app-container">
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/signup" exact component={SignUp} />

          <Route path="/:id/feed">
            <Navbar />
            <div className="app-overview">
              <Sidebar />
              <Feed />
            </div>
          </Route>

          <Route path="/:id/friends">
            <Navbar />
            <div className="app-overview">
              <Sidebar />
              <Friends />
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
