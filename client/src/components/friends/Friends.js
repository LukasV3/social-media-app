import React from "react";
import "./styles.scss";
import { connect } from "react-redux";

const Friends = ({ currentUser }) => {
  const acceptFriendRequest = (id) => {};

  const renderFriendRequests = () => {
    if (currentUser && currentUser.recievedFriendRequestsFrom.length > 0) {
      return currentUser.recievedFriendRequestsFrom.map((user, i) => (
        <div key={i}>
          <p>{user.username}</p>
          <button onClick={() => acceptFriendRequest(user.id)}>Accept</button>
          <button>Decline</button>
        </div>
      ));
    }
    return <p>No friend requests</p>;
  };

  return (
    <div className="friends">
      <h3>My Friends</h3>
      <p></p>

      <h3>Friend Requests</h3>
      {renderFriendRequests()}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { currentUser: state.currentUser };
};

export default connect(mapStateToProps)(Friends);
