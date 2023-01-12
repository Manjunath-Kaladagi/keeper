import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { Fab } from "@mui/material";
import Zoom from "@mui/material/Zoom";

import Note from "./Note";

function CreateArea() {
  const [notes, setNotes] = useState([]);
  const [note, setNote] = useState({ title: "", content: "" });
  const [isClicked, setisClicked] = useState(false);

  function handleChange(e) {
    let { name, value } = e.target;
    setNote((prev) => {
      return { ...prev, [name]: value };
    });
  }

  function handleClick() {
    setisClicked(true);
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
      <form className="create-note">
        {isClicked && (
          <input
            value={note.title}
            onChange={handleChange}
            name="title"
            placeholder="Title"
          />
        )}
        <textarea
          onClick={handleClick}
          onChange={handleChange}
          value={note.content}
          name="content"
          placeholder="Take a note..."
          rows={isClicked ? "3" : "1"}
        />
        <Zoom in={isClicked ? true : false}>
          <Fab onClick={add}>
            <AddIcon />
          </Fab>
        </Zoom>
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
