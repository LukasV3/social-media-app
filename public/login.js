import axios from "axios";

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

    console.log(res);

    if (res.data.status === "success") {
      location.assign("/feed");
    }
  } catch (err) {
    console.log(err);
  }
};
