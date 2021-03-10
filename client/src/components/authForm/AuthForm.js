import React, { useState, useEffect } from "react";
import "./styles.scss";

import history from "../../history";

const validateForm = (values) => {
  let errors = {};

  if (!values.name.trim()) {
    errors.name = "Please enter a name";
  }
  if (!values.username.trim()) {
    errors.username = "Please enter a username";
  }
  if (values.password.length < 8) {
    errors.password = "Password must be at least 8 characters long";
  }

  return errors;
};

const AuthForm = ({ type, onSubmitButtonClick }) => {
  const [values, setValues] = useState({ name: "", username: "", password: "" });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (!isSubmitted) return;

    // When logging in dont need to validate input as user already has an account
    if (type === "Log In") {
      onSubmitButtonClick(values);
    }

    // when signing up inputs need to be valdidated
    if (type === "Sign Up" && Object.keys(errors).length === 0) {
      onSubmitButtonClick(values);
    }

    setIsSubmitted(false);
  }, [isSubmitted, values, errors, onSubmitButtonClick, type]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const onSubmitClick = (e) => {
    e.preventDefault();
    setErrors(validateForm(values));
    setIsSubmitted(true);
  };

  const onAccountButtonClick = () => {
    return type === "Log In" ? history.push("/signup") : history.push("/");
  };

  const renderNameInput = () => {
    if (type === "Sign Up") {
      return (
        <div className="authForm__form--group">
          {renderError(type, "name")}
          <input
            type="text"
            value={values.name}
            onChange={handleInputChange}
            name="name"
            className="authForm__form--input"
            placeholder="Name"
            autoFocus
          />
        </div>
      );
    }
  };

  const renderError = (type, elName) => {
    if (type === "Sign Up") {
      return <p className="authForm__form--error">{errors[elName]}</p>;
    }
  };

  return (
    <div className="authForm">
      <div className="authForm__container">
        <h2 className="authForm__title">{type}</h2>
        <form className="authForm__form">
          {renderNameInput()}

          <div className="authForm__form--group">
            {renderError(type, "username")}
            <input
              type="text"
              value={values.username}
              onChange={handleInputChange}
              name="username"
              className="authForm__form--input"
              placeholder="Username"
            />
          </div>

          <div className="authForm__form--group">
            {renderError(type, "password")}
            <input
              type="password"
              value={values.password}
              onChange={handleInputChange}
              name="password"
              className="authForm__form--input"
              placeholder="Password"
            />
          </div>

          <button className="authForm__form--submit-btn" onClick={onSubmitClick}>
            {type}
          </button>
        </form>
        <button
          type="button"
          className="authForm__toggle-btn"
          onClick={onAccountButtonClick}
        >
          {`${type === "Log In" ? "Dont" : "Already"} have an account? `}
        </button>
      </div>
    </div>
  );
};

export default AuthForm;
