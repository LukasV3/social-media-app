// extending from the built in Error constructor
class AppError extends Error {
  constructor(message, statusCode) {
    super(message); // to call parent constructor (message is the only parameter that the built in Error accepts)

    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith("4") ? "fail" : "error"; // doesnt need to be passed in as its dependent on the statuscode and can therfore be worked out in the constructor
    this.isOperational = true; // prevent unknown errors from being sent to the client

    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = AppError;
