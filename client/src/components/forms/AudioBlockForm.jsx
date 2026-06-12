import { useState } from "react";
import { uploadFile } from "../../services/uploadService";
import "./AudioBlockForm.css";

function AudioBlockForm({ onSave, onCancel }) {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) return;
    try {
      setLoading(true);
      const uploaded = await uploadFile(file);
      onSave({type: "voice",content: uploaded.fileUrl});
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="audio-block-form">
      <h3 className="audio-block-title">Audio Block</h3>

      <input type="file" accept="audio/*" onChange={(e) => setFile(e.target.files[0])} className="audio-file-input" />

      <div className="audio-button-group">
        <button type="submit" className="audio-save-btn">
          {loading ? "Uploading..." : "Save"}
        </button>

        <button type="button" onClick={onCancel} className="audio-cancel-btn">
          Cancel
        </button>
      </div>
    </form>
  );
}

export default AudioBlockForm;