import { useEffect, useState } from "react";
import {
  useNavigate,
  useParams,
} from "react-router-dom";

import {
  getNote,
  updateNote,
} from "../services/noteService";

import "./EditNote.css";

function EditNote() {
  const { id } = useParams();

  const navigate = useNavigate();

  const [note, setNote] = useState(null);

  const [title, setTitle] = useState("");

  const [loading, setLoading] = useState(true);

  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const loadNote = async () => {
      try {
        const data = await getNote(id);

        setNote(data);

        setTitle(data.title);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    loadNote();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setSaving(true);

      await updateNote(id, title);

      navigate(`/notes/${id}`);
    } catch (error) {
      console.error(error);
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="edit-note-loading">
        Loading...
      </div>
    );
  }

  return (
    <div className="edit-note-container">
      <div className="edit-note-header">
        <h1 className="edit-note-title">
          Edit Note
        </h1>

        <p className="edit-note-subtitle">
          Update the title of your note.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="edit-note-form"
      >
        <div>
          <label className="edit-note-label">
            NOTE TITLE
          </label>

          <input
            type="text"
            value={title}
            onChange={(e) =>
              setTitle(e.target.value)
            }
            className="edit-note-input"
            placeholder="Enter note title"
          />
        </div>

        <div className="edit-note-meta">
          <div>
            <span className="edit-note-meta-label">
              Created:
            </span>{" "}
            {new Date(
              note.createdAt
            ).toLocaleDateString()}
          </div>

          <div>
            <span className="edit-note-meta-label">
              Updated:
            </span>{" "}
            {new Date(
              note.updatedAt
            ).toLocaleDateString()}
          </div>
        </div>

        <div className="edit-note-actions">
          <button
            type="button"
            onClick={() =>
              navigate(`/notes/${id}`)
            }
            className="edit-note-cancel-btn"
          >
            Cancel
          </button>

          <button
            type="submit"
            disabled={saving}
            className="edit-note-save-btn"
          >
            {saving
              ? "Saving..."
              : "Save Changes"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditNote;