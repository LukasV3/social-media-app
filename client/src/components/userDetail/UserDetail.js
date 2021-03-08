import React, { useState } from "react";
import "./styles.scss";

import { connect } from "react-redux";
import { updateUser } from "../../actions";

const UserDetail = ({ currentUser, updateUser }) => {
  const [nameTerm, setNameTerm] = useState(currentUser?.name);
  const [usernameTerm, setUsernameTerm] = useState(currentUser?.username);
  const [selectedFile, setSelectedFile] = useState({});

  const onInputChange = (e, type) => {
    switch (type) {
      case "name":
        return setNameTerm(e.target.value);
      case "username":
        return setUsernameTerm(e.target.value);
      case "photo":
        return setSelectedFile(e.target.files[0]);
      default:
        return;
    }
  };

  const onSaveSettingsClick = (e) => {
    e.preventDefault();
    const form = new FormData();
    form.append("name", nameTerm);
    form.append("username", usernameTerm);
    form.append("photo", selectedFile);

    updateUser(currentUser.id, form);
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
          <div className="user-detail__form--group">
            <label className="user-detail__form--label" htmlFor="photo">
              Choose new photo
            </label>
            <input
              type="file"
              onChange={(e) => onInputChange(e, "photo")}
              accept="image/*"
              className="user-detail__form--input"
              id="photo"
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
