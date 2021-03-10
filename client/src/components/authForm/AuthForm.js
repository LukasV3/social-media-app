import React, { useState, useEffect } from "react";
import "./styles.scss";

import history from "../../history";

const AuthForm = ({ type, onSubmitButtonClick }) => {
  const [values, setValues] = useState({ name: "", username: "", password: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (isSubmitted) {
      console.log(values);
      onSubmitButtonClick(values);
    }
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const onSubmitClick = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
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
        value={values.name}
        onChange={handleInputChange}
        name="name"
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
            value={values.username}
            onChange={handleInputChange}
            name="username"
            className="authForm__form--input"
            placeholder="Username"
            required
          />

          <input
            type="password"
            value={values.password}
            onChange={handleInputChange}
            name="password"
            className="authForm__form--input"
            placeholder="Password"
            required
          />

          <button
            className="authForm__form--submit-btn"
            onClick={(e) => onSubmitClick(e)}
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
