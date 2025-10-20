import { useEffect, useState } from "react";
const Home = () => {
  useEffect(() => {
    getAllNotes();
  }, []);

  const [title, setTitle] = useState("");
  const [notes, setNotes] = useState([]);
  const [nextId, setNextId] = useState(3); // Initialize the counter
  const [editMode, setEditMode] = useState(false);
  const [isEditable, setIseditable] = useState("");

  const getAllNotes = () => {
    fetch("http://localhost:4000/notes")
      .then((res) => res.json())
      .then((data) => setNotes(data));
  };
  const changleTitleHandler = (e) => {
    setTitle(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (title.trim() === "") {
      return alert("Please add your text");
    }
    editMode ? updateHandler() : createHandler();
  };
  const createHandler = () => {
    const createNote = { id: nextId, title: title };
    fetch("http://localhost:4000/notes", {
      method: "POST",
      body: JSON.stringify(createNote),
      headers: { "Content-type": "application/json" },
    }).then(() => {
      getAllNotes();
    });
    setNextId((prevId) => prevId + 1);
    setTitle("");
  };
  const editHandler = (note) => {
    setEditMode(true);
    setIseditable(note);
    setTitle(note.title);
  };
  const updateHandler = (noteId) => {
    const { id, ...rest } = isEditable;
    const updatedNote = { ...rest, title: title };
    fetch(`http://localhost:4000/notes/${isEditable.id}`, {
      method: "PUT",
      body: JSON.stringify(updatedNote),
      headers: { "Content-type": "application/json" },
    }).then(() => {
      getAllNotes();
      setEditMode(false);
      setTitle("");
    });
  };
  const removeNotesHandler = (noteId) => {
    fetch(`http://localhost:4000/notes/${noteId}`, {
      method: "DELETE",
    }).then(() => {
      getAllNotes();
    });
  };
  return (
    <div className="App">
      <form onSubmit={submitHandler}>
        <input type="text" value={title} onChange={changleTitleHandler} />
        <button type="submit">{editMode ? "Update Note" : "Add Note"}</button>
      </form>
      <div className="noteList">
        <h2>To-do List</h2>
        <ul>
          {notes.map((note) => {
            return (
              <li key={note.id}>
                <span>
                  {note.id}
                  {note.title}
                </span>
                <button onClick={() => editHandler(note)}>Edit</button>
                <button onClick={() => removeNotesHandler(note.id)}>
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
export default Home;
