const User = require("../models/userModel");
const catchAsync = require("../utils/catchAsync");

// module.exports.followUser = catchAsync(async (req, res, next) => {
//   // username, reqtofollow

//   const updatedUser = await User.findOneAndUpdate(
//     { username: req.body.username },
//     { $push: { following: req.body.requestToFollow } }
//   );

//   res.status(200).json({
//     status: "success",
//     data: updatedUser,
//   });
// });

module.exports.sendFriendRequest = catchAsync(async (req, res, next) => {
  const updatedUser = await User.findByIdAndUpdate(
    req.params.fromId,
    { $push: { sentFriendRequestsTo: req.params.toId } },
    { new: true }
  );

  console.log(updatedUser);

  await User.findByIdAndUpdate(
    req.params.toId,
    { $push: { recievedFriendRequestsFrom: req.params.fromId } },
    { new: true }
  );

  res.status(200).json({
    status: "success",
    data: updatedUser,
  });
});
