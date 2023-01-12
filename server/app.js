const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const noterouters = require("./routes/notesRoutes");
require("dotenv").config();
const port = process.env.PORT;

// express app
const app = express();

// middleware
app.use(express.json());
app.use(cors());

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
