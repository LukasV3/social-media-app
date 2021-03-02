import { GET_USER, CREATE_POST } from "../actions/types";

const initalState = null;

const userReducer = (state = initalState, action) => {
  switch (action.type) {
    case GET_USER:
      return action.payload;
    case CREATE_POST:
      return { ...state, posts: [...state.posts, action.payload] };
    default:
      return state;
  }
};

export default userReducer;
