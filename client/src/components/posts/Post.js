import React from "react";
import "./styles.scss";

const Post = ({ post }) => {
  return (
    <div className="post">
      <div className="post__user-info">
        <div className="post__user-info--img"></div>
        <p className="post__user-info--name">{post.username}</p>
        <p className="post__user-info--date">
          {new Date(post.createdAt).toLocaleString().slice(0, -3)}
        </p>
      </div>
      <p className="post__content">{post.content}</p>
    </div>
  );
};

export default Post;
