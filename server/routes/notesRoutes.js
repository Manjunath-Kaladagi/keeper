const express = require("express");
const router = express.Router();

// createNote
router.post("/", (req, res) => {
  res.json({ msg: "create note" });
});

// getNotes
router.get("/", (req, res) => {
  res.json({ msg: "get all notes" });
});

// getNote
router.get("/:id", (req, res) => {
  res.json({ msg: "get note" });
});

// updateNote
router.put("/:id", (req, res) => {
  res.json({ msg: "update note" });
});

// deleteNote
router.delete("/:id", (req, res) => {
  res.json({ msg: "delete note" });
});

module.exports = router;
