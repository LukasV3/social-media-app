const express = require("express");
const userController = require("../controllers/userController");
const viewsController = require("../controllers/viewsController");

const router = express.Router();

router.get("/", (req, res) => {
  res.redirect("/login");
});

router.get("/login", viewsController.getLoginForm);
router.get("/signup", viewsController.getSignupForm);

router.get("/login/:id", userController.findUser, viewsController.getOverview);
router.post("/signup", userController.createUser, viewsController.getOverview);

module.exports = router;
