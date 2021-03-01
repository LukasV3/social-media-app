import React from "react";
import { connect } from "react-redux";
import { signup } from "../../actions";
import "./styles.scss";

import AuthForm from "../authForm/AuthForm";

const SignUp = ({ signup }) => {
  const signUserUp = (e, formValues) => {
    e.preventDefault();
    signup(formValues);
    console.log(formValues);
  };
  return <AuthForm type="Sign Up" onSubmitButtonClick={signUserUp} />;
};

export default connect(null, { signup })(SignUp);
