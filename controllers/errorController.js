const AppError = require("../utils/appError");

const handleDuplicateFieldsDB = (err) => {
  const value = err.errmsg.match(/(["'])(?:(?=(\\?))\2.)*?\1/)[0];
  const message = `Duplicate field value: ${value}. Please use another value!`;
  return new AppError(message, 400);
};

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";

  let error = { ...err };
  error.message = err.message;

  if (err.code === 11000) error = handleDuplicateFieldsDB(err);

  res.status(error.statusCode).json({
    status: error.status,
    message: error.message,
    error,
    // stack: err.stack,
  });
};
