import { useState } from "react";
import "./YoutubeBlockForm.css";

function YoutubeBlockForm({
  onSave,
  onCancel,
}) {
  const [
    youtubeUrl,
    setYoutubeUrl,
  ] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!youtubeUrl.trim()) return;

    onSave({
      type: "youtube",
      content: youtubeUrl,
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="youtube-block-form"
    >
      <h3 className="youtube-block-title">
        YouTube Block
      </h3>

      <input
        type="text"
        placeholder="https://youtube.com/watch?v=..."
        value={youtubeUrl}
        onChange={(e) =>
          setYoutubeUrl(e.target.value)
        }
        className="youtube-block-input"
      />

      <div className="youtube-button-group">
        <button
          type="submit"
          className="youtube-save-btn"
        >
          Save
        </button>

        <button
          type="button"
          onClick={onCancel}
          className="youtube-cancel-btn"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}

export default YoutubeBlockForm;