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

module.exports = mongoose.model("User", userSchema);
