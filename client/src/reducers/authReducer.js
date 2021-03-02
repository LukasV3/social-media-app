import { LOGIN, SIGNUP } from "../actions/types";

const initalState = {
  isSignedIn: null,
  userId: null,
};

const authReducer = (state = initalState, action) => {
  switch (action.type) {
    case LOGIN:
      return { ...state, isSignedIn: true, userId: action.payload };
    case SIGNUP:
      return { ...state, isSignedIn: true, userId: action.payload };
    default:
      return state;
  }
};

export default authReducer;
