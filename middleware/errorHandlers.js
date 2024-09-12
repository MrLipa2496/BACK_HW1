const { ValidationError } = require('yup');

module.exports.validationHandler = (err, req, res, next) => {
  if (err instanceof ValidationError) {
    return res.status(422).send(err.errors);
  }
  next(err);
};

module.exports.errorHandler = (err, req, res, next) => {
  if (res.headerSent) {
    return;
  }

  const status = err.status ?? 500;
  const message = err.message ?? 'Server Error';

  res.status(status).send(message);
};
