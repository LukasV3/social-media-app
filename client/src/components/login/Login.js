import React from "react";
import { connect } from "react-redux";
import { login } from "../../actions";
import "./styles.scss";

import AuthForm from "../authForm/AuthForm";

const Login = ({ login }) => {
  const logUserIn = (formValues) => {
    login(formValues);
  };

  return <AuthForm type="Log In" onSubmitButtonClick={logUserIn} />;
};

export default connect(null, { login })(Login);
