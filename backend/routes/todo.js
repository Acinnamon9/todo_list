const express = require("express");
const { addtodoCard, getAllTodoCards } = require("../controller/todoController");

const router = express.Router();

router.get("/", getAllTodoCards);
router.post("/", addtodoCard);

module.exports = router;
