const { v4: uuidv4 } = require("uuid");
const Todo = require("../models/todo");

const createNewTodo = async (req, res, next) => {
  try {
    const { title, comment } = req.body;
    if (!title || !comments) {
      return res
        .status(400)
        .json({ message: "Title and comments are required" });
    }

    const newTodo = new Todo({
      id: uuidv4(),
      title,
      comment,
    });
    const savedTodo = await newTodo.save();
    res.status(200).json({ todoResponse: savedTodo });
  } catch (error) {
    console.error("Failed to create a new todo:", error);
    res.status(500).json({ message: "Failed to create a new todo" });
  }
};

const getAllTodo = async (req, res, next) => {
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

// const addCommentToTodo = async (req, res, next) => {
//   try {
//     const { todoId, comment } = req.body;

//     const todo = await Todo.findById(todoId);

//     if (!todo) {
//       return res.status(404).json({ message: "Todo not found" });
//     }

//     todo.comments.push({ comment });
//     const updatedTodo = await todo.save();

//     res.status(200).json({ todo: updatedTodo });
//   } catch (error) {
//     console.error("Failed to add comment to todo:", error);
//     res.status(500).json({ message: "Failed to add comment to todo" });
//   }
// };

module.exports = {
  createNewTodo,
  getAllTodo,
  // addCommentToTodo,
};
