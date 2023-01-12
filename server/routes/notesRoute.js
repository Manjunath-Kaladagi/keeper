const express = require("express");
const router = express.Router();
const {
  createNote,
  getNotes,
  getNote,
  updateNote,
  deleteNote,
} = require("../controllers/notesController");

// createNote
router.post("/", createNote);

// getNotes
router.get("/", getNotes);

// getNote
router.get("/:id", getNote);

// updateNote
router.put("/:id", updateNote);

// deleteNote
router.delete("/:id", deleteNote);

module.exports = router;
