import "@babel/polyfill";
import { login } from "./login";

// DOM ELEMENTS
const loginFormEl = document.querySelector(".login-form");

// DELEGATION

if (loginFormEl) {
  loginFormEl.addEventListener("submit", (e) => {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    login(username, password);
  });
}
