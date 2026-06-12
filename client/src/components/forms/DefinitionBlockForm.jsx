import { useState } from "react";
import "./DefinitionBlockForm.css";

function DefinitionBlockForm({ onSave, onCancel }) {
  const [term, setTerm] = useState("");
  const [definition, setDefinition] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    onSave({
      type: "definition",
      term,
      definition,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="definition-block-form">
      <h3 className="definition-block-title">Definition Block</h3>

      <input
        type="text"
        placeholder="Term"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        className="definition-input"
      />

      <textarea
        rows="5"
        placeholder="Definition"
        value={definition}
        onChange={(e) => setDefinition(e.target.value)}
        className="definition-textarea"
      />

      <div className="definition-button-group">
        <button
          type="submit"
          className="definition-save-btn"
        >
          Save
        </button>

        <button
          type="button"
          onClick={onCancel}
          className="definition-cancel-btn"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}

export default DefinitionBlockForm;