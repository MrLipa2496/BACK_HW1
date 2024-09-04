const { v4: uuidv4 } = require('uuid');

// Масив завдань
const tasks = [
  {
    id: '5bd460e9-eb20-451e-932e-6e7fa1a1a808',
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

// Отримання всіх завдань
const getTasks = (req, res) => {
  res.status(200).send(tasks);
};

// Отримання одного завдання
const getTaskById = (req, res) => {
  const { id } = req.params;
  const task = tasks.find(task => task.id === id);

  if (task) {
    res.status(200).send(task);
  } else {
    res.status(404).send({ message: 'Завдання не знайдено' });
  }
};

// Створення нового завдання
const createTask = (req, res) => {
  const { body, deadline } = req.body;
  const newTask = {
    id: uuidv4(),
    body,
    deadline,
    isDone: false,
  };
  tasks.push(newTask);
  res.status(201).send(newTask);
};

// Оновлення завдання
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

// Видалення завдання
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

module.exports = {
  getTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
};
