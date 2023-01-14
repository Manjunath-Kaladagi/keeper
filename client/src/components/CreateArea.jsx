import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { Fab } from "@mui/material";
import Zoom from "@mui/material/Zoom";

function CreateArea(props) {
  const [note, setNote] = useState({ title: "", content: "" });
  const [isClicked, setisClicked] = useState(false);
  const [error, setError] = useState(null);

  function handleChange(e) {
    let { name, value } = e.target;
    setNote((prev) => {
      return { ...prev, [name]: value };
    });
  }

  function handleClick() {
    setisClicked(true);
  }

  async function add(e) {
    e.preventDefault();
    const response = await fetch("http://localhost:8000/api/notes/", {
      method: "post",
      body: JSON.stringify(note),
      headers: { "Content-Type": "application/json" },
    });

    const json = await response.json();

    if (response.ok) {
      console.log("new note added");
      setNote({ title: "", content: "" });
      setError(null);
      props.load();
      setisClicked(false);
    } else {
      console.log(json.error);
      setError(json.error);
    }
  }

  return (
    <div>
      <form className="create-note" onFocus={handleClick}>
        {isClicked && (
          <input
            value={note.title}
            onChange={handleChange}
            name="title"
            placeholder="Title"
          />
        )}
        <textarea
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
        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
}

export default CreateArea;
