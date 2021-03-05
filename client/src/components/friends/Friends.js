import React from "react";
import "./styles.scss";
import { connect } from "react-redux";

import { acceptFriendRequest, deleteFriend } from "../../actions";

const Friends = ({ currentUser, acceptFriendRequest, deleteFriend }) => {
  const renderFriends = () => {
    if (currentUser && currentUser.friends.length > 0) {
      return currentUser.friends.map((user, i) => (
        <div key={i}>
          <p>{user.username}</p>
          <button onClick={() => deleteFriend(currentUser.id, user.id)}>
            Delete Friend
          </button>
        </div>
      ));
    }
    return <p>You have no friends</p>;
  };

  const renderFriendRequests = () => {
    if (currentUser && currentUser.recievedFriendRequestsFrom.length > 0) {
      return currentUser.recievedFriendRequestsFrom.map((user, i) => (
        <div key={i}>
          <p>{user.username}</p>
          <button onClick={() => acceptFriendRequest(currentUser.id, user.id)}>
            Accept
          </button>
          <button>Decline</button>
        </div>
      ));
    }
    return <p>No friend requests</p>;
  };

  return (
    <div className="friends">
      <h3>My Friends</h3>
      {renderFriends()}

      <h3>Friend Requests</h3>
      {renderFriendRequests()}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { currentUser: state.currentUser };
};

export default connect(mapStateToProps, { acceptFriendRequest, deleteFriend })(Friends);
