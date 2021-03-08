import React, { useState } from "react";
import "./styles.scss";

import { connect } from "react-redux";
import { sendFriendRequest } from "../../actions";

import Search from "../../services/search";

const Navbar = ({ currentUser, sendFriendRequest }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const onInputChange = (e) => {
    e.preventDefault();
    setSearchTerm(e.target.value);

    search(e.target.value);
  };

  const search = (term) => {
    setSearchResults(Search.search(term).slice(0, 10));
  };

  const displaySearchResults = () => {
    if (searchResults) {
      return searchResults.map((result, i) => {
        const btn = (
          <button onClick={() => sendFriendRequest(currentUser.id, result.item.id)}>
            Send Friend Request
          </button>
        );

        // if user has already sent user a friend request
        if (currentUser.sentFriendRequestsTo.find((id) => id === result.item.id)) {
          return (
            <div key={i}>
              <p>{result.item.username}</p>
              <p>(Friend request sent!)</p>
            </div>
          );
        }

        // if user is themselves
        if (currentUser.id === result.item.id) {
          return (
            <div key={i}>
              <p>{result.item.username}</p>
              <p>(Me)</p>
            </div>
          );
        }

        // if user is already a friend
        if (currentUser.friends.find((friend) => friend.id === result.item.id)) {
          return (
            <div key={i}>
              <p>{result.item.username}</p>
              <p>(Already firends)</p>
            </div>
          );
        }

        return (
          <div key={i}>
            <p>{result.item.username}</p>
            {btn}
          </div>
        );
      });
    }
  };

  return (
    <nav className="nav">
      <ul className="nav__links">
        <li className="nav__item nav__item--logo">
          <a className="nav__link--logo" href="/">
            Social App
          </a>
        </li>
        <li className="nav__item nav__item--search">
          <div className="nav__search">
            <input
              type="text"
              value={searchTerm}
              onChange={onInputChange}
              className="nav__search--input"
              placeholder="Search"
            />

            <div className="nav__search--results">{displaySearchResults()}</div>
          </div>
        </li>
      </ul>
    </nav>
  );
};

const mapStateToProps = (state) => {
  return { currentUser: state.currentUser };
};

export default connect(mapStateToProps, { sendFriendRequest })(Navbar);
