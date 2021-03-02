import API from "../services/api";
import history from "../history";
import { LOGIN, SIGNUP, CREATE_POST, GET_USER } from "./types";

export const login = (formValues) => {
  return async (dispatch) => {
    const res = await API.post("/login", formValues);

    dispatch({
      type: LOGIN,
      payload: res.data.data,
    });

    if (res.data.status === "success") {
      history.push("/feed");
    }
  };
};

export const signup = (formValues) => {
  return async (dispatch) => {
    const res = await API.post("/signup", formValues);

    dispatch({
      type: SIGNUP,
      payload: res.data.data,
    });

    if (res.data.status === "success") {
      history.push("/feed");
    }
  };
};

// HAVENT YET CREATED REDUCERS FOR THESE ACTION CREATORS??

export const createPost = (userContent) => {
  return async (dispatch) => {
    const res = await API.post("/post", userContent);

    dispatch({
      type: CREATE_POST,
      payload: res.data,
    });
  };
};

export const getUser = (id) => {
  return async (dispatch) => {
    const res = await API.get(`/${id}`);

    dispatch({
      type: GET_USER,
      payload: res.data.data,
    });
  };
};
