const express = require("express");
const morgan = require("morgan");

const AppError = require("./utils/appError");
const userRouter = require("./routes/userRoutes");

const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));

if (process.env === "development") {
  app.use(morgan("dev"));
}

// Routes
app.use("/api/v1/users", userRouter);

// Handling unhandled routes (accessing an undefined route...)
app.all("*", (req, res, next) => {
  next(new AppError(`Cant find ${req.originalUrl} on this server`, 404));
});

// Global error handling
app.use((err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";

  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
  });
});

module.exports = app;
