import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import "./styles.scss";
import { createPost, getUser } from "../../actions";

import Navbar from "../navbar/Navbar";

const Feed = ({ auth, currentUser, createPost, getUser }) => {
  const [postText, setPostText] = useState("");
  // const storedJwt = localStorage.getItem("token");

  useEffect(() => {
    // get user data
    if (auth.isSignedIn) {
      getUser(auth.userId);
    }
  }, [getUser, auth]);

  const onInputChange = (e) => {
    setPostText(e.target.value);
  };

  const onPostClick = (e) => {
    e.preventDefault();
    createPost({ username: currentUser.username, content: postText });
    setPostText("");
  };

  const renderPosts = () => {
    if (currentUser && currentUser.posts.length > 0) {
      return currentUser.posts.map((post, i) => <p key={i}>{post.content}</p>);
    }

    return <p>No posts</p>;
  };

  return (
    <>
      <Navbar />
      <h1>Username: {currentUser?.username}</h1>
      <textarea value={postText} onChange={onInputChange}></textarea>
      <button onClick={onPostClick}>Share</button>
      {renderPosts()}
    </>
  );
};

const mapStateToProps = (state) => {
  return { auth: state.auth, currentUser: state.currentUser };
};

export default connect(mapStateToProps, { createPost, getUser })(Feed);
