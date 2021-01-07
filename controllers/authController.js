const jwt = require("jsonwebtoken");
const { promisify } = require("util");
const User = require("../models/userModel");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");

const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

const createSendToken = (user, statusCode, res) => {
  const token = signToken(user._id);

  const cookieOptions = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
    ), // convert to millisceonds
    httpOnly: true, // cookie cant be modified by the browser
  };

  if (process.env.NODE_ENV === "production") cookieOptions.secure = true;

  res.cookie("jwt", token, cookieOptions);

  // Remove password from output
  user.password = undefined;

  res.status(statusCode).json({
    status: "success",
    token,
    data: user,
  });
};

module.exports.login = catchAsync(async (req, res, next) => {
  const { username, password } = req.body;

  // Check if username and psasword exist
  if (!username || !password) {
    return next(new AppError("Please provide username and password", 400));
  }

  // Check if  user exists (in the databse)
  const user = await User.findOne({ username });

  if (!user || user.password !== password) {
    return next(new AppError("Incorrect username or password", 401));
  }

  // If everythings therefore ok send token to client
  createSendToken(user, 200, res);
});

module.exports.signup = catchAsync(async (req, res, next) => {
  const newUser = await User.create({
    username: req.body.username,
    password: req.body.password,
  });

  createSendToken(newUser, 201, res);
});

module.exports.isLoggedIn = async (req, res, next) => {
  if (req.cookies.jwt) {
    try {
      // Verify token
      const decodedUser = await promisify(jwt.verify)(
        req.cookies.jwt,
        process.env.JWT_SECRET
      );

      // Check if user exists
      const currentUser = await User.findById(decodedUser.id);
      if (!currentUser) {
        return next();
      }

      // THERE IS A LOGGED IN USER
      req.body.user = currentUser;
      return next();
    } catch (err) {
      return next();
    }
  }
  next();
};
