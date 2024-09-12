const express = require('express');
const { validate, errorHandlers } = require('./middleware');

const {
  getTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
} = require('./controllers/tasksController');

const app = express();

app.use(express.json());

app.get('/tasks', getTasks);
app.get('/tasks/:id', getTaskById);

app.post('/tasks', validate.validateTask, createTask);
app.put('/tasks/:id', validate.validateTask, updateTask);

app.delete('/tasks/:id', deleteTask);

app.use(errorHandlers.validationHandler, errorHandlers.errorHandler);

module.exports = app;
