import {
  GET_USER,
  CREATE_POST,
  DELETE_POST,
  UPDATE_USER,
  ACCEPT_FRIEND_REQUEST,
  DECLINE_FRIEND_REQUEST,
  DELETE_FRIEND,
} from "../actions/types";

const initalState = null;

const userReducer = (state = initalState, action) => {
  switch (action.type) {
    case GET_USER:
      return action.payload;
    case UPDATE_USER:
      return { ...state, ...action.payload };
    case CREATE_POST:
      return { ...state, posts: [...state.posts, action.payload] };
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((post) => post._id !== action.payload),
      };
    case ACCEPT_FRIEND_REQUEST:
      return { ...state, ...action.payload };
    case DECLINE_FRIEND_REQUEST:
      return { ...state, ...action.payload };
    case DELETE_FRIEND:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default userReducer;
