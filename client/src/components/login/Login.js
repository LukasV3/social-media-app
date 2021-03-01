import React from "react";
import { connect } from "react-redux";
import { login } from "../../actions";
import "./styles.scss";

import AuthForm from "../authForm/AuthForm";

const Login = ({ login }) => {
  const logUserIn = (e, formValues) => {
    e.preventDefault();
    login(formValues);
    console.log(formValues);
  };

  return <AuthForm type="Log In" onSubmitButtonClick={logUserIn} />;
};

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps, { login })(Login);
