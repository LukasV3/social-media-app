import axios from "axios";
import { showAlert } from "./alerts";

export const login = async (username, password) => {
  try {
    const res = await axios({
      method: "POST",
      url: "/api/v1/users/login",
      data: {
        username,
        password,
      },
    });
    // axios will put data object keys on req.body

    if (res.data.status === "success") {
      showAlert("success", "Logged in successfully!");
      window.setTimeout(() => {
        location.assign("/feed");
      }, 1500);
    }
  } catch (err) {
    showAlert("error", "Please try again!");
  }
};

export const signup = async (username, password) => {
  try {
    const res = await axios({
      method: "POST",
      url: "/api/v1/users/signup",
      data: {
        username,
        password,
      },
    });
    // axios will put data object keys on req.body

    if (res.data.status === "success") {
      showAlert("success", "You have successfully created an account!");
      window.setTimeout(() => {
        location.assign("/feed");
      }, 1500);
    }
  } catch (err) {
    showAlert("error", "Username already exists!");
  }
};
