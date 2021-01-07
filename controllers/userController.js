const catchAsync = require("../utils/catchAsync");
const User = require("../models/userModel");

module.exports.getAllUsers = catchAsync(async (req, res, next) => {
  res.send("find user");
});
module.exports.getUser = (req, res) => {
  res.send("create user");
};
module.exports.createUser = (req, res) => {
  res.send("create user");
};
module.exports.updateUser = (req, res) => {
  res.send("create user");
};
module.exports.deleteUser = (req, res) => {
  res.send("create user");
};
