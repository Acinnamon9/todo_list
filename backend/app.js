const express = require("express");
const mongoose = require("mongoose");
const todoRoute = require("./routes/todo");

const app = express();
const port = 3000;

app.use(express.json());

app.use("/todo", todoRoute);

mongoose
  .connect("mongodb://localhost:27017")
  .then((res) => {
    console.log("Connected to a Database");
  })
  .then(() => {
    app.listen(port, () => {
      console.log("Server are running in Port 3000");
    });
  })
  .catch((error) => {
    console.error("Failed to connect to the database:", error);
  });
