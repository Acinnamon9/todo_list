require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
const todoRoute = require("./routes/todo");

const app = express(); 
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use("/todo", todoRoute);

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to MongoDB Atlas");
    app.listen(port, () => {
      console.log(`Server is running at http://localhost:${port}/todo`);
    });
  })
  .catch((error) => {
    console.error("Failed to connect to the database:", error);
  });
