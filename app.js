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
