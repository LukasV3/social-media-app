import React from "react";
import "./styles.scss";
import dateFormat from "dateformat";

const Post = ({ post }) => {
  // const dateOptions = { day: "numeric", month: "long" };
  // console.log(new Date(post.createdAt).get);

  const renderCreatedAt = (createdAt) => {
    const date = new Date(createdAt);
    const day = dateFormat(date, "DDDD");
    if (day === "Today" || day === "Yesterday") {
      const newDate = `${day} at ${dateFormat(date, "HH:MM TT")}`;
      console.log(newDate);
    } else {
      const newDate = `${dateFormat(date, "d:MM TT")}`;
    }
  };

  return (
    <div className="post">
      <div className="post__user-info">
        <div className="post__user-info--img"></div>
        <p className="post__user-info--name">{post.username}</p>
        <p className="post__user-info--date">
          {renderCreatedAt(post.createdAt)}
          {/* {console.log(post)} */}
          {/* {new Date(post.createdAt).toLocaleString("en-US", dateOptions)} */}
        </p>
      </div>
      <p className="post__content">{post.content}</p>
    </div>
  );
};

export default Post;
