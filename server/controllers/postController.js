const Post = require("../models/postModel");
const catchAsync = require("../utils/catchAsync");

module.exports.createPost = catchAsync(async (req, res, next) => {
  const post = await Post.create(req.body);

  res.status(200).json({
    status: "success",
    data: post,
  });
});

module.exports.deletePost = catchAsync(async (req, res, next) => {
  await Post.findByIdAndDelete(req.params.id);

  res.status(204).json({
    status: "success",
    data: null,
  });
});
