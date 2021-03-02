import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import "./styles.scss";
import { createPost, getUser } from "../../actions";

const Feed = ({ currentUser, createPost, getUser }) => {
  useEffect(() => {
    // get user data
    getUser(currentUser?.id);
  }, [getUser, currentUser.id]);

  const [postText, setPostText] = useState("");

  const onInputChange = (e) => {
    setPostText(e.target.value);
  };

  const onPostClick = (e) => {
    e.preventDefault();
    console.log(currentUser.username, postText);
    createPost({ username: currentUser.username, content: postText });
    setPostText("");
  };

  return (
    <div>
      <h1>Username: {currentUser?.username}</h1>
      <textarea value={postText} onChange={onInputChange}></textarea>
      <button onClick={onPostClick}>Share</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { currentUser: state.auth.user };
};

export default connect(mapStateToProps, { createPost, getUser })(Feed);
