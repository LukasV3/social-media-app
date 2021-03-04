import { GET_USER, CREATE_POST, DELETE_POST } from "../actions/types";

const initalState = null;

const userReducer = (state = initalState, action) => {
  switch (action.type) {
    case GET_USER:
      return action.payload;
    case CREATE_POST:
      return { ...state, posts: [...state.posts, action.payload] };
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((post) => post._id !== action.payload),
      };
    default:
      return state;
  }
};

export default userReducer;
