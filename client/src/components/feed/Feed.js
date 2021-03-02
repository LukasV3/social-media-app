import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import "./styles.scss";
import { createPost, getUser } from "../../actions";

const Feed = ({ auth, currentUser, createPost, getUser }) => {
  const storedJwt = localStorage.getItem("token");

  useEffect(() => {
    // get user data
    if (auth.isSignedIn) {
      getUser(auth.userId);
    } // see if they have a jwt and get user
    // get user from url??
    else {
    }
    console.log(storedJwt);
  }, [getUser, auth, storedJwt]);

  const [postText, setPostText] = useState("");

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
    <div>
      <h1>Username: {currentUser?.username}</h1>
      <textarea value={postText} onChange={onInputChange}></textarea>
      <button onClick={onPostClick}>Share</button>
      {renderPosts()}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { auth: state.auth, currentUser: state.currentUser };
};

export default connect(mapStateToProps, { createPost, getUser })(Feed);
