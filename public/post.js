import axios from "axios";

export const createPost = async (username, content) => {
  console.log(username, content);

  try {
    const res = await axios({
      method: "POST",
      url: "/api/v1/users/post",
      data: {
        username,
        content,
      },
    });
    // axios will put data object keys on req.body
    if (res.data.status === "success") {
      //   showAlert("success", "You have successfully created an account!");
      location.assign("/feed");
    }
  } catch (err) {}
};
