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
    });
    setPostText("");
  };

  return (
    <div className="create-post">
      <h3 className="create-post__title">Post Something</h3>
      <hr />
      <div>
        <textarea
          className="create-post__input"
          value={postText}
          onChange={onInputChange}
          placeholder="Whats on your mind?"
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
