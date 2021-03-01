import React, { useState } from "react";
import "./styles.scss";

import history from "../../history";

const AuthForm = ({ type }) => {
  const [usernameTerm, setUsernameTerm] = useState("");
  const [passwordTerm, setPasswordTerm] = useState("");

  const onInputChange = (e, type) => {
    type === "username"
      ? setUsernameTerm(e.target.value)
      : setPasswordTerm(e.target.value);
  };

  const onSubmitButtonClick = (e) => {
    e.preventDefault();
    console.log(usernameTerm, passwordTerm);
  };

  const onAccountButtonClick = (e) => {
    e.preventDefault();

    return type === "Log In" ? history.push("/signup") : history.push("/");
  };

  return (
    <div className="authForm">
      <h5>{type}</h5>
      <form className="">
        <div className="">
          <label htmlFor="Username">Username</label>
          <input
            type="text"
            value={usernameTerm}
            onChange={(e) => onInputChange(e, "username")}
            className=""
            placeholder="Username"
            required
            autoFocus
          />
        </div>

        <div className="">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            value={passwordTerm}
            onChange={(e) => onInputChange(e, "password")}
            className=""
            placeholder="Password"
            required
          />
        </div>

        <button onClick={onSubmitButtonClick}>{type}</button>
        <hr />

        <button onClick={onAccountButtonClick}>
          {`${type === "Log In" ? "Dont" : "Already"} have an account? `}
        </button>
      </form>
    </div>
  );
};

export default AuthForm;
