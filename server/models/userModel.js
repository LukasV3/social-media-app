const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Please provide a username"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Please provide a password"],
    },
    name: {
      type: String,
    },
    friends: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "User",
      },
    ],
    recievedFriendRequestsFrom: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "User",
      },
    ],
    sentFriendRequestsTo: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "User",
      },
    ],
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

// Virtual populate
userSchema.virtual("posts", {
  ref: "Post",
  foreignField: "username",
  localField: "username",
});

// Query Middleware
userSchema.pre(/^find/, function (next) {
  this.populate("posts");
  next();
});

userSchema.pre(/^find/, function (next) {
  this.populate(
    "recievedFriendRequestsFrom",
    "-password -friends -recievedFriendRequestsFrom -sentFriendRequestsTo "
  );
  next();
});

module.exports = mongoose.model("User", userSchema);
