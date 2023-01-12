const mongoose = require("mongoose");

const notesSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  content: {
    type: String,
  },
});

module.exports = mongoose.model("Note", notesSchema);
