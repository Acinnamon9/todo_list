const express = require("express");
const { createNewTodo, getAllTodo } = require("../controller/todoController");

const router = express.Router();

router.get("/", getAllTodo);
router.post("/", createNewTodo);
// router.post("/:todoId/comments", addCommentToTodo);

module.exports = router;
