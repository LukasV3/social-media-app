const express = require("express");
const path = require("path");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const AppError = require("./utils/appError");
const globalErrorHandler = require("./controllers/errorController");
const userRouter = require("./routes/userRoutes");
const viewRouter = require("./routes/viewRoutes");

const app = express();

app.set("view engine", "ejs");

// CORS
app.use(cors());
app.options("*", cors());

// Serving static files
app.use(express.static(path.join(__dirname, "public")));

// Reading data from req.body
app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: true, limit: "10kb" }));
app.use(cookieParser());

if (process.env === "development") {
  app.use(morgan("dev"));
}

// Routes
app.use("/", viewRouter);
app.use("/api/v1/users", userRouter);

// Handling unhandled routes (accessing an undefined route...)
app.all("*", (req, res, next) => {
  next(new AppError(`Cant find ${req.originalUrl} on this server`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
