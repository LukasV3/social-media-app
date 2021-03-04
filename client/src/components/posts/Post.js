import React from "react";
import "./styles.scss";
import dateFormat from "dateformat";
import { connect } from "react-redux";
import { deletePost } from "../../actions";

const Post = ({ post, deletePost }) => {
  const renderCreatedAt = (date) => {
    const day = dateFormat(date, "DDDD");
    return day === "Today" || day === "Yesterday"
      ? `${day} at ${dateFormat(date, "HH:MM TT")}`
      : `${dateFormat(date, "d mmmm")} at ${dateFormat(date, "HH:MM TT")}`;
  };

  return (
    <div className="post">
      <button onClick={() => deletePost(post._id)} className="post__delete--btn">
        <i className="fas fa-times"></i>
      </button>
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

const mapStateToProps = (state) => {
  return { currentUser: state.currentUser };
};

export default connect(mapStateToProps, { deletePost })(Post);
