import React, { useState } from "react";
import { connect } from "react-redux";
import "./styles.scss";

import { createPost } from "../../../actions";

const CreatePost = ({ currentUser, createPost }) => {
  const [postText, setPostText] = useState("");

  const onInputChange = (e) => {
    setPostText(e.target.value);
  };

  const onPostClick = (e) => {
    e.preventDefault();
    createPost({
      username: currentUser.username,
      name: currentUser.name,
      content: postText,
      photo: currentUser.photo,
    });
    setPostText("");
  };

  return (
    <div className="create-post">
      <h3 className="create-post__title">Post Something</h3>
      <hr />
      <div className="create-post__content">
        <img src={`/img/users/default.jpg`} alt="User" className="create-post__img"></img>
        <textarea
          className="create-post__input"
          value={postText}
          onChange={onInputChange}
          placeholder={`Whats on your mind, ${currentUser?.name}?`}
          autoFocus
        ></textarea>
        <button className="create-post__btn" onClick={onPostClick}>
          Post
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { currentUser: state.currentUser };
};

export default connect(mapStateToProps, { createPost })(CreatePost);
