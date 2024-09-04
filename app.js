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

const getTaskById = (req, res) => {
  const { id } = req.params;
  const task = tasks.find(t => t.id === id);

  if (task) {
    res.status(200).send(task);
  } else {
    res.status(404).send('Task is Not found');
  }
};

const updateTask = (req, res) => {
  const { id } = req.params;
  const { body, deadline, isDone } = req.body;

  const taskIndex = tasks.findIndex(task => task.id === id);

  if (taskIndex !== -1) {
    tasks[taskIndex] = {
      ...tasks[taskIndex],
      body: body || tasks[taskIndex].body,
      deadline: deadline || tasks[taskIndex].deadline,
      isDone: typeof isDone === 'boolean' ? isDone : tasks[taskIndex].isDone,
    };

    res.status(200).send(tasks[taskIndex]);
  } else {
    res.status(404).send({ message: 'Завдання не знайдено' });
  }
};

const deleteTask = (req, res) => {
  const { id } = req.params;
  const taskIndex = tasks.findIndex(task => task.id === id);

  if (taskIndex !== -1) {
    tasks.splice(taskIndex, 1);
    res.status(200).send({ message: 'Завдання успішно видалено' });
  } else {
    res.status(404).send({ message: 'Завдання не знайдено' });
  }
};

app.get('/tasks', getTask);
app.post('/tasks', createTask);
app.get('/task/:id');
app.put('/tasks/:id', updateTask);
app.delete('/tasks/:id', deleteTask);

module.exports = app;
