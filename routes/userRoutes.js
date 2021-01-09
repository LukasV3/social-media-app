const express = require("express");

const authController = require("../controllers/authController");
const userController = require("../controllers/userController");
const postController = require("../controllers/postController");

const router = express.Router();
// api/v1/users/...

router.post("/login", authController.login);
router.post("/signup", authController.signup);

router.post("/post", postController.createPost);

router.route("/").get(userController.getAllUsers).post(userController.createUser);
router
  .route("/:id")
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = router;
