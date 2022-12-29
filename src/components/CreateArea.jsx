import React, { useState } from "react";
import Note from "./Note";

function CreateArea() {
  const [notes, setNotes] = useState([]);
  const [note, setNote] = useState({ title: "", content: "" });

  function handleChange(e) {
    let { name, value } = e.target;
    setNote((prev) => {
      return { ...prev, [name]: value };
    });
  }

  function add(e) {
    e.preventDefault();
    setNotes((prevNotes) => {
      return [...prevNotes, note];
    });
    setNote({ title: "", content: "" });
  }

  function deleteNote(id) {
    setNotes((prevNotes) => {
      prevNotes.splice(id, 1);
      return [...prevNotes];
    });
  }

  return (
    <div>
      <form>
        <input
          value={note.title}
          onChange={handleChange}
          name="title"
          placeholder="Title"
        />
        <textarea
          onChange={handleChange}
          value={note.content}
          name="content"
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={add}>Add</button>
      </form>
      {notes.map((note, index) => (
        <Note
          key={index}
          id={index}
          title={note.title}
          content={note.content}
          deleteNote={deleteNote}
        />
      ))}
    </div>
  );
}

export default CreateArea;
