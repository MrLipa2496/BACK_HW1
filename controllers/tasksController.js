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
  {
    id: uuidv4(),
    body: 'Прочитати книгу',
    deadline: '2024-10-01',
    isDone: false,
  },
  {
    id: uuidv4(),
    body: 'Запланувати відпустку',
    deadline: '2024-12-15',
    isDone: false,
  },
  {
    id: uuidv4(),
    body: 'Навчитися новій технології',
    deadline: '2024-11-30',
    isDone: false,
  },
  {
    id: uuidv4(),
    body: 'Підготуватися до презентації',
    deadline: '2024-09-20',
    isDone: true,
  },
  {
    id: uuidv4(),
    body: 'Зробити ремонт у квартирі',
    deadline: '2024-10-20',
    isDone: false,
  },
  {
    id: uuidv4(),
    body: 'Організувати зустріч з друзями',
    deadline: '2024-09-18',
    isDone: true,
  },
  {
    id: uuidv4(),
    body: 'Завершити курс програмування',
    deadline: '2024-12-01',
    isDone: false,
  },
  {
    id: uuidv4(),
    body: 'Підготувати резюме',
    deadline: '2024-10-15',
    isDone: false,
  },
  {
    id: uuidv4(),
    body: 'Оновити сайт компанії',
    deadline: '2024-11-05',
    isDone: false,
  },
  {
    id: uuidv4(),
    body: 'Вивчити основи машинного навчання',
    deadline: '2024-11-10',
    isDone: false,
  },
  {
    id: uuidv4(),
    body: 'Відвідати виставку мистецтв',
    deadline: '2024-09-25',
    isDone: false,
  },
];

// Отримання всіх завдань
const getTasks = (req, res) => {
  const { page, resultsPerPage } = req.pagination;

  const startIndex = (page - 1) * resultsPerPage;
  const endIndex = startIndex + resultsPerPage;

  const paginatedTasks = tasks.slice(startIndex, endIndex);

  res.status(200).send({
    page,
    resultsPerPage,
    totalTasks: tasks.length,
    tasks: paginatedTasks,
  });
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
