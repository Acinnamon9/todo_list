const express = require("express");
const {
  addTodoCard,
  getAllTodoCards,
  deleteTodo,
} = require("../controller/todoController");

const router = express.Router();

router.get("/", getAllTodoCards);
router.post("/", addTodoCard);
router.delete("/:id", deleteTodo); // Directly use destructured function

module.exports = router;
