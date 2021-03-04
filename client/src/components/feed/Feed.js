import React from "react";
import { connect } from "react-redux";
import "./styles.scss";
import { createPost } from "../../actions";

import CreatePost from "../posts/createPost/CreatePost";
import Post from "../posts/Post";

const Feed = ({ currentUser }) => {
  const renderPosts = () => {
    if (currentUser && currentUser.posts.length > 0) {
      return [...currentUser.posts]
        .reverse()
        .map((post, i) => <Post key={i} post={post} />);
    }

    // return <p>No posts</p>;
  };

  return (
    <div className="feed">
      <CreatePost />
      {renderPosts()}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { currentUser: state.currentUser };
};

export default connect(mapStateToProps, { createPost })(Feed);
