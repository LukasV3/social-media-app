import "@babel/polyfill";
import { login, signup } from "./login";
import { createPost } from "./post";

// DOM ELEMENTS
const loginFormEl = document.querySelector(".login-form");
const signupFormEl = document.querySelector(".signup-form");
const createPostEl = document.querySelector(".create-post-div");

// DELEGATION

if (loginFormEl) {
  loginFormEl.addEventListener("submit", (e) => {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    login(username, password);
  });
}

if (signupFormEl) {
  signupFormEl.addEventListener("submit", (e) => {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    signup(username, password);
  });
}

if (createPostEl) {
  const shareBtn = document.querySelector(".share-post");
  shareBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const postContent = document.getElementById("message-content").value;
    const username = document.getElementById("currentUserUsername").textContent.slice(1);

    createPost(username, postContent);
  });
}
