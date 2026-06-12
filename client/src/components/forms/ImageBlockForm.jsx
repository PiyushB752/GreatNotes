import { useState } from "react";
import { uploadFile } from "../../services/uploadService";
import "./ImageBlockForm.css";

function ImageBlockForm({ onSave, onCancel }) {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) return;
    try {
      setLoading(true);
      const uploaded = await uploadFile(file);
      onSave({ type: "image", content: uploaded.fileUrl});
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="image-block-form">
      <h3 className="image-block-title">Image Block</h3>

      <input type="file" accept="image/*" onChange={(e) => setFile(e.target.files[0])} className="image-file-input" />

      <div className="image-button-group">
        <button type="submit" className="image-save-btn">
          {loading ? "Uploading..." : "Save"}
        </button>

        <button type="button" onClick={onCancel} className="image-cancel-btn" >
          Cancel
        </button>
      </div>
    </form>
  );
}

export default ImageBlockForm;