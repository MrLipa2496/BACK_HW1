const { v4: uuidv4 } = require('uuid');
const express = require('express');

const app = express();

app.use(express.json());

const tasks = [
  {
    id: uuidv4(),
    body: 'Завершити проект',
    deadline: '2024-09-10',
    isDone: false,
  },
  {
    id: uuidv4(),
    body: 'Купити продукти',
    deadline: '2024-09-05',
    isDone: false,
  },
  {
    id: uuidv4(),
    body: 'Підготувати звіт',
    deadline: '2024-09-15',
    isDone: false,
  },
  {
    id: uuidv4(),
    body: 'Відвідати тренування',
    deadline: '2024-09-07',
    isDone: false,
  },
];

const getTask = (req, res) => {
  res.status(200).send(tasks);
};

const createTask = (req, res) => {
  const { body } = req;
  tasks.push({ ...body, id: uuidv4() });
  res.status(201).send(tasks);
};

app.get('/tasks', getTask);
app.post('/tasks', createTask);

module.exports = app;
