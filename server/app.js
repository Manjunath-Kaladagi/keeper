const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const noterouters = require("./routes/notesRoute");
require("dotenv").config();
const port = process.env.PORT;

// express app
const app = express();

// middleware
app.use(express.json());
app.use(cors());
app.use((req, res, next) => {
  console.log(`${req.method}: ${req.path}`);
  next();
});

// routes
app.use("/api/notes", noterouters);

// DB connection
mongoose.set("strictQuery", true);
mongoose.connect("mongodb://localhost:27017/keeper").then(() => {
  console.log("DB connected");
  app.listen(port, () => {
    console.log("Listening on 8000");
  });
});
