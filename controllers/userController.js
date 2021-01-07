const catchAsync = require("../utils/catchAsync");
const User = require("../models/userModel");
const AppError = require("../utils/appError");

module.exports.getAllUsers = catchAsync(async (req, res, next) => {
  const users = await User.find();

  res.status(200).json({
    status: "success",
    results: users.length,
    data: users,
  });
});

module.exports.getUser = catchAsync(async (req, res, next) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    return next(new AppError("User with that ID does not exist", 404));
  }

  res.status(200).json({
    status: "success",
    data: user,
  });
});

module.exports.createUser = catchAsync(async (req, res, next) => {
  console.log(req.body);
  const newUser = await User.create({
    username: req.body.username,
    password: req.body.password,
  });

  res.status(201).json({
    status: "success",
    data: newUser,
  });
});

module.exports.updateUser = catchAsync(async (req, res, next) => {
  const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body);

  if (!updatedUser) {
    return next(new AppError("User with that ID does not exist", 404));
  }

  res.status(200).json({
    status: "success",
    data: updatedUser,
  });
});

module.exports.deleteUser = catchAsync(async (req, res, next) => {
  await User.findByIdAndDelete(req.params.id);

  res.status(204).json({
    status: "success",
    data: null,
  });
});
