import React, { useEffect } from "react";
import "./styles.scss";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { getUser } from "../../actions";

const Sidebar = ({ currentUser, auth, getUser }) => {
  // const storedJwt = localStorage.getItem("token");

  useEffect(() => {
    // get user data
    if (auth.isSignedIn) {
      getUser(auth.userId);
    }
  }, [getUser, auth]);

  return (
    <div className="sidebar">
      <div className="sidebar__user">
        <div className="sidebar__user--img"></div>
        <p className="sidebar__user--name">{currentUser?.username}</p>
        <p className="sidebar__user--name"></p>
      </div>

      <div className="sidebar__menu">
        <ul>
          <li>
            <i class="fas fa-copy"></i>
            <Link to={`/${currentUser?.username}/feed`}>Feed</Link>
          </li>
          <li>
            <i class="fas fa-user-friends"></i>
            <Link to={`/${currentUser?.username}/friends`}>Friends</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { currentUser: state.currentUser, auth: state.auth };
};

export default connect(mapStateToProps, { getUser })(Sidebar);
