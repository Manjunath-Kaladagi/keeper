import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

function Note(props) {
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={() => props.deleteNote(props.id)}>
        <DeleteOutlineIcon />
      </button>
    </div>
  );
}

export default Note;
