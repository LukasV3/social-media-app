import React, { useEffect } from "react";
import { connect } from "react-redux";
import "./styles.scss";
import { createPost, getUser } from "../../actions";

import CreatePost from "../posts/createPost/CreatePost";
import Post from "../posts/Post";

const Feed = ({ auth, currentUser, getUser }) => {
  // const storedJwt = localStorage.getItem("token");

  useEffect(() => {
    // get user data
    if (auth.isSignedIn) {
      getUser(auth.userId);
    }
  }, [getUser, auth]);

  const renderPosts = () => {
    if (currentUser && currentUser.posts.length > 0) {
      return [...currentUser.posts]
        .reverse()
        .map((post, i) => <Post key={i} post={post} />);
    }

    return <p>No posts</p>;
  };

  return (
    <div className="feed">
      <CreatePost />
      {renderPosts()}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { auth: state.auth, currentUser: state.currentUser };
};

export default connect(mapStateToProps, { createPost, getUser })(Feed);
