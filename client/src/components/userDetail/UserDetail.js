import React, { useState } from "react";
import "./styles.scss";

import { connect } from "react-redux";
import { updateUser } from "../../actions";

const UserDetail = ({ currentUser, updateUser }) => {
  const [nameTerm, setNameTerm] = useState(currentUser?.name);
  const [usernameTerm, setUsernameTerm] = useState(currentUser?.username);

  const onInputChange = (e, type) => {
    type === "name" ? setNameTerm(e.target.value) : setUsernameTerm(e.target.value);
  };

  const onSaveSettingsClick = (e) => {
    e.preventDefault();
    updateUser(currentUser.id, { name: nameTerm, username: usernameTerm });
  };

  return (
    <div className="user-detail">
      <h3>Your Account Settings</h3>
      <form className="user-detail__form">
        <div className="user-detail__form--group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            onChange={(e) => onInputChange(e, "name")}
            value={nameTerm}
            id="name"
          ></input>
        </div>

        <div className="user-detail__form--group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            onChange={(e) => onInputChange(e, "username")}
            value={usernameTerm}
            id="username"
          ></input>
        </div>

        <button onClick={onSaveSettingsClick}>Save Settings</button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { currentUser: state.currentUser };
};

export default connect(mapStateToProps, { updateUser })(UserDetail);
