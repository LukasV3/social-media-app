import React, { useState } from "react";
import "./styles.scss";

import history from "../../history";

const AuthForm = ({ type, onSubmitButtonClick }) => {
  const [nameTerm, setNameTerm] = useState("");
  const [usernameTerm, setUsernameTerm] = useState("");
  const [passwordTerm, setPasswordTerm] = useState("");

  const onInputChange = (e, type) => {
    // type === "username"
    //   ? setUsernameTerm(e.target.value)
    //   : setPasswordTerm(e.target.value);

    switch (type) {
      case "name":
        return setNameTerm(e.target.value);
      case "username":
        return setUsernameTerm(e.target.value);
      case "password":
        return setPasswordTerm(e.target.value);
      default:
        return;
    }
  };

  const onAccountButtonClick = (e) => {
    e.preventDefault();

    return type === "Log In" ? history.push("/signup") : history.push("/");
  };

  const renderNameInput = () => {
    if (type === "Log In") return;

    return (
      <input
        type="text"
        value={nameTerm}
        onChange={(e) => onInputChange(e, "name")}
        className="authForm__form--input"
        placeholder="Name"
        required
        autoFocus
      />
    );
  };

  return (
    <div className="authForm">
      <div className="authForm__container">
        <h2 className="authForm__title">{type}</h2>
        <form className="authForm__form">
          {renderNameInput()}

          <input
            type="text"
            value={usernameTerm}
            onChange={(e) => onInputChange(e, "username")}
            className="authForm__form--input"
            placeholder="Username"
            required
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
              onSubmitButtonClick(e, {
                name: nameTerm,
                username: usernameTerm,
                password: passwordTerm,
              })
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
