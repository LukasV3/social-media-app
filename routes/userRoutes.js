const express = require("express");
const userController = require("../controllers/userController");

const router = express.Router();

router.get("/signup", async (req, res) => {
  res.render("signup");
});

module.exports = router;
