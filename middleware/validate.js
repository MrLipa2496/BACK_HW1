const { TASK_VALIDATION_SCHEMA } = require('../utils/validateSchema');

module.exports.validateTask = async (req, res, next) => {
  const { body } = req;
  try {
    const valedatedTask = await TASK_VALIDATION_SCHEMA.validate(body);
    req.body = valedatedTask;
    next();
  } catch (err) {
    next(err);
  }
};
