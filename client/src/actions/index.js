import API from "../services/api";
import history from "../history";
import { LOGIN } from "./types";

export const login = (formValues) => {
  return async (dispatch) => {
    const res = await API.post("/api/v1/users/login", formValues);

    dispatch({
      type: LOGIN,
      payload: res.data.data,
    });

    if (res.data.status === "success") {
      history.push("/feed");
    }
  };
};
