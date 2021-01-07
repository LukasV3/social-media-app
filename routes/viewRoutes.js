const express = require("express");
const authController = require("../controllers/authController");
const viewsController = require("../controllers/viewsController");

const router = express.Router();

router.get("/", authController.isLoggedIn, viewsController.getLoginForm);
router.get("/feed", authController.isLoggedIn, viewsController.getFeed);

// router.get("/", authController.isLoggedIn, viewsController.getFeed);

module.exports = router;
