import API from "../services/api";
import history from "../history";
import { LOGIN, SIGNUP, CREATE_POST, GET_USER, DELETE_POST, UPDATE_USER } from "./types";
import { showAlert, hideAlert } from "../services/alerts";

export const login = (formValues) => {
  return async (dispatch) => {
    try {
      const res = await API.post("/login", formValues);

      dispatch({
        type: LOGIN,
        payload: res.data.data.id,
      });

      if (res.data.status === "success") {
        showAlert("success", "Logged in successfully!");
        window.setTimeout(() => {
          history.push(`/${res.data.data.username}/feed`);
          hideAlert();
        }, 1500);
      }
    } catch (err) {
      showAlert("error", "Please try again!");
      window.setTimeout(() => {
        hideAlert();
      }, 3000);
    }
  };
};

export const signup = (formValues) => {
  return async (dispatch) => {
    const res = await API.post("/signup", formValues);

    dispatch({
      type: SIGNUP,
      payload: res.data.data.id,
    });

    if (res.data.status === "success") {
      history.push(`/${res.data.data.username}/feed`);
    }
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

export const updateUser = (id, formValues) => {
  return async (dispatch) => {
    const res = await API.patch(`/${id}`, formValues);

    dispatch({
      type: UPDATE_USER,
      payload: res.data.data,
    });
  };
};

export const createPost = (userContent) => {
  return async (dispatch) => {
    const res = await API.post("/post", userContent);

    dispatch({
      type: CREATE_POST,
      payload: res.data.data,
    });
  };
};

export const deletePost = (id) => {
  return async (dispatch) => {
    await API.delete(`/post/${id}`);

    dispatch({
      type: DELETE_POST,
      payload: id,
    });
  };
};
