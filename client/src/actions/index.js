import API from "../services/api";
import history from "../history";
import { LOGIN, SIGNUP } from "./types";

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
