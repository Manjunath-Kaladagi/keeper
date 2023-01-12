const { model } = require("mongoose");
const mongoose = require("mongoose");
const Note = require("../models/notesModel");

// getNotes
const getNotes = async (req, res) => {
  try {
    const notes = await Note.find({}).sort({ createdAt: -1 });
    res.status(200).json(notes);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// getNote
const getNote = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "not found" });
  }
  const note = await Note.findById(id);

  if (!note) {
    return res.status(400).json({ error: "not found" });
  }
  res.status(200).json(note);
};

// createNote
const createNote = async (req, res) => {
  const { title, content } = req.body;
  try {
    const note = await Note.create({ title, content });
    res.status(200).json(note);
  } catch (err) {
    res.status(400).json({ erros: err.message });
  }
};

// updateNote
const updateNote = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "not found" });
  }
  const note = await Note.findByIdAndUpdate(id, { ...req.body });

  if (!note) {
    return res.status(400).json({ error: "not found" });
  }
  res.status(200).json({ msg: "updated" });
};

// deleteNote
const deleteNote = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "not found" });
  }
  const note = await Note.findByIdAndDelete(id);

  if (!note) {
    return res.status(400).json({ error: "not found" });
  }
  res.status(200).json(note);
};

module.exports = {
  createNote,
  getNotes,
  getNote,
  updateNote,
  deleteNote,
};
