import React, { useState } from "react";
import "./styles.scss";

import history from "../../history";

const AuthForm = ({ type, onSubmitButtonClick }) => {
  const [usernameTerm, setUsernameTerm] = useState("");
  const [passwordTerm, setPasswordTerm] = useState("");

  const onInputChange = (e, type) => {
    type === "username"
      ? setUsernameTerm(e.target.value)
      : setPasswordTerm(e.target.value);
  };

  const onAccountButtonClick = (e) => {
    e.preventDefault();

    return type === "Log In" ? history.push("/signup") : history.push("/");
  };

  return (
    <div className="authForm">
      <div className="authForm__container">
        <h2 className="authForm__title">{type}</h2>
        <form className="authForm__form">
          <input
            type="text"
            value={usernameTerm}
            onChange={(e) => onInputChange(e, "username")}
            className="authForm__form--input"
            placeholder="Username"
            required
            autoFocus
          />

          <input
            type="password"
            value={passwordTerm}
            onChange={(e) => onInputChange(e, "password")}
            className="authForm__form--input"
            placeholder="Password"
            required
          />

          <button
            className="authForm__form--submit-btn"
            onClick={(e) =>
              onSubmitButtonClick(e, { username: usernameTerm, password: passwordTerm })
            }
          >
            {type}
          </button>
        </form>
        <button className="authForm__toggle-btn" onClick={onAccountButtonClick}>
          {`${type === "Log In" ? "Dont" : "Already"} have an account? `}
        </button>
      </div>
    </div>
  );
};

export default AuthForm;
