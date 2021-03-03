import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import "./styles.scss";
import { createPost, getUser } from "../../actions";

import Navbar from "../navbar/Navbar";
import Posts from "../posts/Posts";

const Feed = ({ auth, currentUser, createPost, getUser }) => {
  // const storedJwt = localStorage.getItem("token");

  useEffect(() => {
    // get user data
    if (auth.isSignedIn) {
      getUser(auth.userId);
    }
  }, [getUser, auth]);

  return (
    // <>
    //   <Navbar />
    //   <div className="container">
    //     <div className="sidebar">
    //       <h3>Username: {currentUser?.username}</h3>
    //     </div>
    //     {/* depending on route render either friends or feeds etc */}
    //     <Posts currentUser={currentUser} />
    //   </div>
    //   {/* <h1>Username: {currentUser?.username}</h1>
    //   <textarea value={postText} onChange={onInputChange}></textarea>
    //   <button onClick={onPostClick}>Share</button>
    //   {renderPosts()} */}

    // </>

    <div className="feed">feed</div>
  );
};

const mapStateToProps = (state) => {
  return { auth: state.auth, currentUser: state.currentUser };
};

export default connect(mapStateToProps, { createPost, getUser })(Feed);
