import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getNotes, deleteNote } from "../services/noteService";
import "./Dashboard.css";

function Dashboard() {
  const [notes, setNotes] = useState([]);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("latest");
  const loadNotes = async () => {
    try {
      const data = await getNotes(search, sort);
      setNotes(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadNotes();
  }, [search, sort]);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this note?"
    );
    if (!confirmDelete) return;
    try {
      await deleteNote(id);
      loadNotes();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="dashboard-page">
      <div className="dashboard-hero">
        <h1 className="dashboard-hero-title">
          Welcome
        </h1>
        <p className="dashboard-hero-text">
          Organize your study materials, manage notes,
          and learn smarter with GreatNotes.
        </p>
      </div>
      <div className="dashboard-controls">
        <input type="text" placeholder="Search notes..." value={search} onChange={(e) => setSearch(e.target.value)} className="dashboard-search" />
        <select value={sort} onChange={(e) => setSort(e.target.value)} className="dashboard-sort">
          <option value="latest">Latest</option>
          <option value="oldest">Oldest</option>
        </select>
      </div>

      {notes.length > 0 ? (
        <div className="dashboard-notes-grid">
          {notes.map((note) => (
            <div key={note._id} className="dashboard-note-card" >
              <div className="dashboard-note-content">
                <h2 className="dashboard-note-title">
                  {note.title}
                </h2>
                <p className="dashboard-note-date">
                  Created:{" "}
                  {new Date(note.createdAt).toLocaleDateString()}
                </p>
                <p className="dashboard-note-date">
                  Updated:{" "}
                  {new Date(note.updatedAt).toLocaleDateString()}
                </p>
              </div>

              <div className="dashboard-note-actions">
                <Link to={`/notes/${note._id}`} className="dashboard-btn dashboard-btn-primary">
                  View
                </Link>
                <Link to={`/notes/edit/${note._id}`} className="dashboard-btn dashboard-btn-secondary" >
                  Edit
                </Link>
                <button onClick={() =>handleDelete(note._id)} className="dashboard-btn dashboard-btn-danger" >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="dashboard-empty">
          <div className="dashboard-empty-icon">
            📚
          </div>
          <h2 className="dashboard-empty-title">
            No Notes Found
          </h2>
          <p className="dashboard-empty-text">
            Start building your study materials by
            creating your first note.
          </p>
          <Link to="/notes/create" className="dashboard-empty-button">
            Create Note
          </Link>
        </div>
      )}
    </div>
  );
}

export default Dashboard;