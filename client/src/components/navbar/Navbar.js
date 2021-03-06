import React, { useState, useEffect } from "react";
import "./styles.scss";

import API from "../../services/api";
import Search from "../../services/search";

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      // get all users and place in searchbase
      const res = await API.get("/");
      Search.addUsers(res.data.data);
    };
    fetchUsers();
  }, []);

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
      return searchResults.map((result, i) => (
        <div key={i}>Username: {result.item.username}</div>
      ));
    }

    return <p>No users found</p>;
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
            <button className="nav__search--btn">
              <i className="fas fa-search"></i>
            </button>
          </div>

          <div className="nav__search--results">
            {/* {displaySearchResults()} */}
            <div>lukasvolk3</div>
            <div>lukasvolk3</div>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
