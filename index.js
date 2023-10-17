const express = require('express');

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

let todoList = [];

app.get('/', (req, res) => {
  res.render('index', { todos: todoList });
});

app.post('/add', (req, res) => {
  const newTodo = req.body.todoItem;
  if (newTodo.trim() !== '') {
    todoList.push(newTodo);
  }
  res.redirect('/');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});