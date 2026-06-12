import { useState } from "react";
import "./TextBlockForm.css";

function TextBlockForm({ onSave, onCancel }) {
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!content.trim()) return;

    onSave({
      type: "text",
      content,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="text-block-form">
      <h3 className="text-block-title">Text Block</h3>

      <textarea
        rows="8"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Write your notes..."
        className="text-block-textarea"
      />

      <div className="text-block-button-group">
        <button
          type="submit"
          className="text-block-save-btn"
        >
          Save
        </button>

        <button
          type="button"
          onClick={onCancel}
          className="text-block-cancel-btn"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}

export default TextBlockForm;