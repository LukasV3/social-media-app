const multer = require("multer");
const sharp = require("sharp");
const catchAsync = require("../utils/catchAsync");
const User = require("../models/userModel");
const AppError = require("../utils/appError");

const multerStorage = multer.memoryStorage();

// to make sure only images are uploaded
const multerFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    cb(new AppError("Not an image! Please upload only images", 400), false);
  }
};

// const multerStorage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "../client/public/img/users");
//   },
//   filename: (req, file, cb) => {
//     // user=594042dfgbsld3-343894579234.jpeg
//     const ext = file.mimetype.split("/")[1];
//     console.log(`user-${req.params.id}.${ext}`);
//     cb(null, `user-${req.params.id}.${ext}`);
//   },
// });

const upload = multer({
  storage: multerStorage,
  // dest: "../client/public/img/users",
  fileFilter: multerFilter,
});

module.exports.uploadUserPhoto = upload.single("photo");

module.exports.resizeUserPhoto = catchAsync(async (req, res, next) => {
  if (!req.file) return next();

  req.file.filename = `user-${req.params.id}.png`;
  console.log(req.file.filename);
  await sharp(req.file.buffer)
    .resize(500, 500)
    .toFormat("jpeg")
    .jpeg({ quality: 90 })
    .toFile(`../client/public/img/users/${req.file.filename}`, (err, info) =>
      console.log(err)
    );

  next();
});

const filterObj = (obj, ...allowedFields) => {
  const newObj = {};
  Object.keys(obj).forEach((el) => {
    if (allowedFields.includes(el)) newObj[el] = obj[el];
  });
  return newObj;
};

module.exports.updateMe = catchAsync(async (req, res, next) => {
  // 1) create error if user POSTs password data
  if (req.body.password) {
    return next(new AppError("This route is not for password updates", 400));
  }

  // 2) Filtered out unwanted field names that are not allowed to be updated
  // const filteredBody = filterObj(req.body, "name", "username");
  // if (req.file) filteredBody.photo = req.file.filename;

  // 3) Update user document
  const updatedUser = await User.findByIdAndUpdate(req.params.id, filteredBody, {
    new: true,
  });

  res.status(200).json({
    status: "success",
    data: updatedUser,
  });
});

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
  const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

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
