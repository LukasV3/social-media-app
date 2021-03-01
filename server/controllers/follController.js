const User = require("../models/userModel");
const catchAsync = require("../utils/catchAsync");

module.exports.followUser = catchAsync(async (req, res, next) => {
  // username, reqtofollow

  const updatedUser = await User.findOneAndUpdate(
    { username: req.body.username },
    { $push: { following: req.body.requestToFollow } }
  );

  res.status(200).json({
    status: "success",
    data: updatedUser,
  });
});