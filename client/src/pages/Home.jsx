import Header from "../components/Header";
import Footer from "../components/Footer";
import CreateArea from "../components/CreateArea";
import Note from "../components/Note";
import { useState, useEffect } from "react";

function Home() {
  const [notes, setNotes] = useState([]);
  const fetchNotes = async () => {
    const response = await fetch("http://localhost:8000/api/notes/");
    const data = await response.json();
    if (response.ok) {
      setNotes(data);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <div>
      <Header />
      <CreateArea load={fetchNotes} />
      {notes.map((note) => {
        return (
          <Note
            key={note._id}
            id={note._id}
            title={note.title}
            content={note.content}
            load={fetchNotes}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default Home;
