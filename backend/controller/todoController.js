const { v4: uuidv4 } = require("uuid");
const Todo = require("../models/todo");

const addTodoCard = async (req, res, next) => {
  try {
    const { taskName, comment } = req.body;
    if (!taskName || !comment) {
      return res
        .status(400)
        .json({ message: "taskName and comments are required" });
    }

    const newTodo = new Todo({
      id: uuidv4(),
      taskName,
      comment,
    });
    const savedTodo = await newTodo.save();
    res.status(200).json({ todoResponse: savedTodo });
  } catch (error) {
    console.error("Failed to create a new todo:", error);
    res.status(500).json({ message: "Failed to create a new todo" });
  }
};

const getAllTodoCards = async (req, res, next) => {
  try {
    const todos = await Todo.find().sort({ date: -1 });

    if (todos.length === 0) {
      return res.status(404).json({ message: "No todos found" });
    }

    res.status(200).json({ todos });
  } catch (error) {
    console.error("Failed to retrieve todos:", error);
    res.status(500).json({ message: "Failed to retrieve todos" });
  }
};

const deleteTodo = async (req, res, next) => {
  try {
    const { id } = req.params;
    await Todo.findOneAndDelete({ id }); // assuming "id" is your UUID field
    res.status(200).json({ message: "Todo deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete todo" });
  }
};

module.exports = {
  addTodoCard,
  getAllTodoCards,
  deleteTodo, // ✅ Fix: Exported properly
};
