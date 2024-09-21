import express from "express";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.json());

app.all("/", (req, res) => {
  res.send(`I am up!`);
});

const todos = [
  {
    id: "1",
    title: "Task 1",
    completed: false,
  },
  {
    id: "2",
    title: "Task 2",
    completed: true,
  },
];

// READ
app.get("/todos", (req, res) => {
  res.json(todos);
});

// CREATE
app.post("/todos", (req, res) => {
  const newTodo = req.body;
  todos.push(newTodo);
  res.status(201).json({
    message: "New Todo Added!",
  });
});

// UPDATE
app.put("/todos/:id", (req, res) => {
  const newTodoData = req.body;
  const todoParamsId = req.params.id;
  const todoIndex = todos.findIndex((td) => td.id === todoParamsId);

  if (todoIndex !== -1) {
    todos[todoIndex] = {
      id: todoParamsId,
      ...newTodoData,
    };
    res.json({
      message: "Todo updated successfully!",
    });
  } else {
    res.status(400).json({
      message: "Todo Id does not exist!",
    });
  }
});

// DELETE
app.delete("/todos/:id", (req, res) => {
  const todoParamsId = req.params.id;
  const todoIndex = todos.findIndex((td) => td.id === todoParamsId);

  if (todoIndex !== -1) {
    todos.splice(todoIndex, 1);
  }

  res.json({
    message: "Todo deleted successfully!",
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
