const express = require("express");
const router = express.Router();
const uuidv4 = require("uuid").v4;

let todos = [
  {
    id: "haf24jd",
    todo: "do laundry",
    done: "false",
  },
  {
    id: "jp2nkl2",
    todo: "wash dishes",
    done: "true",
  },
];

router.get("/get-all-todos", function (req, res) {
  res.json({ payload: todos });
});

router.get("/get-todo-by-id/:id", function (req, res) {
  const id = req.params.id;

  let index = todos.findIndex((index) => {
    return index.id === id;
  });

  if (index === -1) {
    res.status(404).json({ message: "The Todo ID you are looking for does not exists, please check ID" });
  } else {
    res.json({ payload: todos[index] });
  }
});

router.get("/get-todos-by-done/:done", function (req, res) {
  let filterKey = req.params.done;

  let newDoneArray = todos.filter((item) => {
    return item.done === filterKey;
  });

  res.json({ payload: newDoneArray });
});

router.post("/create-new-todo", function (req, res) {
  const { todo } = req.body;
  let newTodoObj = { id: uuidv4(), todo, done: "false" };
  todos.push(newTodoObj);
  res.json({ payload: todos });
});

module.exports = router;
