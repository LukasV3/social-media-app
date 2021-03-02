import { LOGIN, SIGNUP, GET_USER } from "../actions/types";

const initalState = {
  isSignedIn: null,
  user: null,
};

const authReducer = (state = initalState, action) => {
  switch (action.type) {
    case LOGIN:
      return { ...state, isSignedIn: true, user: action.payload };
    case SIGNUP:
      return { ...state, isSignedIn: true, user: action.payload };
    case GET_USER:
      return { ...state, user: action.payload };
    default:
      return state;
  }
};

export default authReducer;
