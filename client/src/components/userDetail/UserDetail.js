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
      <div className="user-detail__settings">
        <h3 className="user-detail__settings--title">Your Account Settings</h3>
        <form className="user-detail__form">
          <div className="user-detail__form--group">
            <label className="user-detail__form--label" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              onChange={(e) => onInputChange(e, "name")}
              value={nameTerm}
              className="user-detail__form--input"
              id="name"
            ></input>
          </div>

          <div className="user-detail__form--group">
            <label className="user-detail__form--label" htmlFor="username">
              Username
            </label>
            <input
              type="text"
              onChange={(e) => onInputChange(e, "username")}
              value={usernameTerm}
              className="user-detail__form--input"
              id="username"
            ></input>
          </div>

          <button onClick={onSaveSettingsClick} className="user-detail__form--btn">
            Save Settings
          </button>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { currentUser: state.currentUser };
};

export default connect(mapStateToProps, { updateUser })(UserDetail);
