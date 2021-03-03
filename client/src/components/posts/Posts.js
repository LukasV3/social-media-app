import React from "react";
import "./styles.scss";

import CreatePost from "./createPost/CreatePost";

const Posts = ({ currentUser }) => {
  const renderPosts = () => {
    if (currentUser && currentUser.posts.length > 0) {
      return currentUser.posts.map((post, i) => <p key={i}>{post.content}</p>);
    }

    return <p>No posts</p>;
  };

  return (
    <div className="posts">
      <CreatePost currentUser={currentUser} />
      {renderPosts()}
    </div>
  );
};

export default Posts;
