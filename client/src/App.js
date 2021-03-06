import React, { useEffect } from "react";
import { Router, Route, Switch } from "react-router-dom";
import "./styles/index.scss";

import history from "./history";
import Login from "./components/login/Login";
import SignUp from "./components/signup/SignUp";
import Feed from "./components/feed/Feed";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import Friends from "./components/friends/Friends";
import UserDetail from "./components/userDetail/UserDetail";

import Search from "./services/search";
import API from "./services/api";

const App = () => {
  useEffect(() => {
    const fetchUsers = async () => {
      // get all users and place in searchbase
      const res = await API.get("/");
      Search.addUsers(res.data.data);
    };
    fetchUsers();
  }, []);

  return (
    <Router history={history}>
      <div className="app-container">
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/signup" exact component={SignUp} />

          <Route path="/:username/feed" exact>
            <Navbar />
            <div className="app-overview">
              <Sidebar />
              <Feed />
            </div>
          </Route>

          <Route path="/:username/friends" exact>
            <Navbar />
            <div className="app-overview">
              <Sidebar />
              <Friends />
            </div>
          </Route>

          <Route path="/:username/account" exact>
            <Navbar />
            <div className="app-overview">
              <Sidebar />
              <UserDetail />
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
