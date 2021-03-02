import React, { useState } from "react";
import "./styles.scss";

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const onInputChange = (e) => {
    e.preventDefault();
    setSearchTerm(e.target.value);
  };

  return (
    <nav className="nav">
      <ul className="nav__links">
        <li className="nav__item">
          <a className="nav__link--logo" href="/">
            Social Media App
          </a>
        </li>
        <li className="nav__item">
          <div className="nav__search">
            <input
              type="text"
              value={searchTerm}
              onChange={onInputChange}
              className="nav__search--input"
            />
            <button className="nav__search--btn">
              <i className="fas fa-search"></i>
            </button>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
