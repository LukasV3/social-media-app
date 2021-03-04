import React from "react";
import "./styles.scss";
import dateFormat from "dateformat";

const Post = ({ post }) => {
  const renderCreatedAt = (date) => {
    const day = dateFormat(date, "DDDD");
    return day === "Today" || day === "Yesterday"
      ? `${day} at ${dateFormat(date, "HH:MM TT")}`
      : `${dateFormat(date, "d mmmm")} at ${dateFormat(date, "HH:MM TT")}`;
  };

  return (
    <div className="post">
      <div className="post__user-info">
        <div className="post__user-info--img"></div>
        <p className="post__user-info--name">{post.name}</p>
        <p className="post__user-info--date">
          {renderCreatedAt(new Date(post.createdAt))}
        </p>
      </div>
      <p className="post__content">{post.content}</p>
    </div>
  );
};

export default Post;
