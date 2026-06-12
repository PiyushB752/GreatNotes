import { useState } from "react";
import ReactMarkdown from "react-markdown";
import { generateSummary } from "../../services/summaryService";
import "./SummaryForm.css";

function SummaryForm({ onSave }) {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [summary, setSummary] = useState("");

  const handleGenerate = async () => {
    try {
      setLoading(true);
      const result = await generateSummary(text);
      setSummary(result.summary);
    } catch (error) {
      alert("Failed to generate summary");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="summary-form">
      <textarea rows="8" value={text} onChange={(e) => setText(e.target.value)} placeholder="Paste study material..." className="summary-textarea" />
      <button onClick={handleGenerate} className="generate-summary-btn">
        {loading ? "Generating..." : "Generate Summary"}
      </button>
      {summary && (
        <>
          <div className="summary-preview">
            <ReactMarkdown>{summary}</ReactMarkdown>
          </div>
          <button onClick={() => onSave(summary)} className="save-summary-btn">
            Save Summary
          </button>
        </>
      )}
    </div>
  );
}

export default SummaryForm;