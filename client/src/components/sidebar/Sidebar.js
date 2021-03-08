import React, { useEffect } from "react";
import "./styles.scss";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import history from "../../history";

import { getUser } from "../../actions";

const Sidebar = ({ currentUser, auth, getUser }) => {
  // const storedJwt = localStorage.getItem("token");

  useEffect(() => {
    // get user data
    if (auth.isSignedIn) {
      getUser(auth.userId);
    }
  }, [getUser, auth]);

  const toggleActiveMenu = (e) => {
    let currentlyActiveMenuEl = document.querySelector(".sidebar__menu--active");
    if (!currentlyActiveMenuEl) {
      currentlyActiveMenuEl = document.querySelector(".sidebar__user");
    }

    let selectedMenuEl = e.target.closest(".sidebar__menu--link");
    if (!selectedMenuEl) {
      selectedMenuEl = document.querySelector(".sidebar__user");
    }

    currentlyActiveMenuEl.classList.remove("sidebar__menu--active");
    selectedMenuEl.classList.add("sidebar__menu--active");
  };

  return (
    <div className="sidebar">
      <div
        onClick={(e) => {
          toggleActiveMenu(e);
          history.push(`/${currentUser?.username}/account`);
        }}
        className="sidebar__user"
        style={{ border: "1px solid #999" }}
      >
        <img
          src={`/img/users/${currentUser?.photo}`}
          alt="User"
          className="sidebar__user--img"
        ></img>
        <p className="sidebar__user--name">
          {currentUser?.name || currentUser?.username}
        </p>
        <p className="sidebar__user--username">@{currentUser?.username}</p>
      </div>

      <div className="sidebar__menu">
        <ul className="sidebar__menu--links">
          <li className="sidebar__menu--item">
            <Link
              to={`/${currentUser?.username}/feed`}
              className="sidebar__menu--link sidebar__menu--active"
              onClick={toggleActiveMenu}
            >
              <i className="fas fa-copy sidebar__menu--icon"></i>
              <span>Feed</span>
            </Link>
          </li>
          <li className="sidebar__menu--item">
            <Link
              to={`/${currentUser?.username}/friends`}
              className="sidebar__menu--link"
              onClick={toggleActiveMenu}
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
