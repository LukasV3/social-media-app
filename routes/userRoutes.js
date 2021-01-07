const express = require("express");
const userController = require("../controllers/userController");

const router = express.Router();

// api/v1/users/...

router.route("/").get(userController.getAllUsers).patch(userController.createUser);
router
  .route("/:id")
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = router;
