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
        <p className="sidebar__user--username">@areallylongmaded</p>
      </div>

      <div className="sidebar__menu">
        <ul className="sidebar__menu--links">
          <li className="sidebar__menu--item">
            <Link
              to={`/${currentUser?.username}/feed`}
              className="sidebar__menu--link sidebar__menu--active"
            >
              <i className="fas fa-copy sidebar__menu--icon sidebar__menu--active"></i>
              <span>Feed</span>
            </Link>
          </li>
          <li className="sidebar__menu--item">
            <Link
              to={`/${currentUser?.username}/friends`}
              className="sidebar__menu--link"
            >
              <i className="fas fa-user-friends sidebar__menu--icon"></i>
              <span>Friends</span>
            </Link>
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
