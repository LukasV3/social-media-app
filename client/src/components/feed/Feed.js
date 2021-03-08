import React from "react";
import { connect } from "react-redux";
import "./styles.scss";
import { createPost } from "../../actions";

import CreatePost from "../posts/createPost/CreatePost";
import Post from "../posts/Post";

const Feed = ({ currentUser }) => {
  const renderPosts = () => {
    if (!currentUser) return;

    // concat currentUser posts with all friends posts
    const allPosts = [
      ...currentUser.posts,
      ...currentUser.friends.map((friend) => friend.posts),
    ].flat();

    // sort them so latest shows first
    const sortedPosts = allPosts
      .slice()
      .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

    // pass prop down saying whether post is user or friends
    return sortedPosts.map((post, i) => {
      if (post.username === currentUser.username) {
        return <Post key={i} post={post} currentUserPost />;
      } else {
        return <Post key={i} post={post} />;
      }
    });

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
