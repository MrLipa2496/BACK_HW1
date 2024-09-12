const yup = require('yup');

module.exports.TASK_VALIDATION_SCHEMA = yup.object({
  body: yup
    .string()
    .required('BODY is required')
    .min(10, 'The MIN length of the BODY field is 10 characters'),
  deadline: yup
    .date()
    .required('DEADLINE is required')
    .min(new Date(), 'The DEADLINE date must be in the future'),
  isDone: yup.boolean(),
});
