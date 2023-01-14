import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

function Note(props) {
  async function deleteNote() {
    const response = await fetch(
      `http://localhost:8000/api/notes/${props.id}`,
      {
        method: "delete",
        headers: { "Content-Type": "application/json" },
      }
    );
    const json = await response.json();
    if (response.ok) {
      console.log(`deleted`);
      props.load();
    } else {
      console.log(json.error);
    }
  }
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={deleteNote}>
        <DeleteOutlineIcon />
      </button>
    </div>
  );
}

export default Note;
