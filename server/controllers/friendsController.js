const User = require("../models/userModel");
const catchAsync = require("../utils/catchAsync");

module.exports.sendFriendRequest = catchAsync(async (req, res, next) => {
  const updatedUser = await User.findByIdAndUpdate(
    req.params.fromId,
    { $push: { sentFriendRequestsTo: req.params.toId } },
    { new: true }
  );

  await User.findByIdAndUpdate(req.params.toId, {
    $push: { recievedFriendRequestsFrom: req.params.fromId },
  });

  res.status(200).json({
    status: "success",
    data: updatedUser,
  });
});

module.exports.acceptFriendRequest = catchAsync(async (req, res, next) => {
  const updatedUser = await User.findByIdAndUpdate(
    req.params.userId,
    {
      $pull: { recievedFriendRequestsFrom: req.params.fromId },
      $push: { friends: req.params.fromId },
    },
    { new: true }
  );

  await User.findByIdAndUpdate(req.params.fromId, {
    $pull: { sentFriendRequestsTo: req.params.userId },
    $push: { friends: req.params.userId },
  });

  res.status(200).json({
    status: "success",
    data: updatedUser,
  });
});
