import "@babel/polyfill";
import { login, signup } from "./login";

// DOM ELEMENTS
const loginFormEl = document.querySelector(".login-form");
const signupFormEl = document.querySelector(".signup-form");

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
