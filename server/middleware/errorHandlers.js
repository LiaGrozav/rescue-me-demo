const createError = require("http-errors");

exports.routeNotFound = (req, res, next) => {
  res.status(404).json({
    statusCode: 404,
    status: "fail",
    message: `Can't find http://localhost:4000${req.originalUrl}`,
  });
};

exports.authError = (message) => {
  throw createError(401, message);
};

exports.globalErrorHandler = (err, req, res, next) => {
  res.status(err.status || 500).json({
    statusCode: err.statusCode,
    status: err.status === 404 ? "Fail" : "server error",
    message: err.message,
    stack: err.stack,
  });
};