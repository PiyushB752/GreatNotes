import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createNote } from "../services/noteService";
import "./CreateNote.css";

function CreateNote() {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const note = await createNote(title);

    navigate(`/notes/${note._id}`);
  };

  return (
    <div className="create-note-container">
      <h1 className="create-note-title">
        Create Note
      </h1>

      <form
        onSubmit={handleSubmit}
        className="create-note-form"
      >
        <input
          type="text"
          placeholder="Note Title"
          value={title}
          onChange={(e) =>
            setTitle(e.target.value)
          }
          className="create-note-input"
        />

        <button className="create-note-button">
          Create
        </button>
      </form>
    </div>
  );
}

export default CreateNote;