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
    createPost({ username: currentUser.username, content: postText });
    setPostText("");
  };

  return (
    <div className="create-post">
      <h3>Post Something</h3>
      <div>
        <textarea value={postText} onChange={onInputChange}></textarea>
        <button onClick={onPostClick}>Share</button>
      </div>
    </div>
  );
};

export default connect(null, { createPost })(CreatePost);
