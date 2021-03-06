import React from "react";
import "./styles.scss";
import { connect } from "react-redux";

import { acceptFriendRequest, deleteFriend, declineFriendRequest } from "../../actions";

const Friends = ({
  currentUser,
  acceptFriendRequest,
  deleteFriend,
  declineFriendRequest,
}) => {
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

  let handleFriendRequestClick = (type, id1, id2) => {
    if (handleFriendRequestClick.fired) return;

    type === "accept" ? acceptFriendRequest(id1, id2) : declineFriendRequest(id1, id2);

    handleFriendRequestClick.fired = true;
  };

  const renderFriendRequests = () => {
    if (currentUser && currentUser.recievedFriendRequestsFrom.length > 0) {
      return currentUser.recievedFriendRequestsFrom.map((user, i) => (
        <div key={i}>
          <p>{user.username}</p>
          <button
            onClick={() => handleFriendRequestClick("accept", currentUser.id, user.id)}
          >
            Accept
          </button>
          <button
            onClick={() => handleFriendRequestClick("decline", currentUser.id, user.id)}
          >
            Decline
          </button>
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

export default connect(mapStateToProps, {
  acceptFriendRequest,
  deleteFriend,
  declineFriendRequest,
})(Friends);
