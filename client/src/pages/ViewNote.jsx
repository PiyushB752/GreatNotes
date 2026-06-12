import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getNote } from "../services/noteService";
import { addBlock } from "../services/blockService";
import BlockRenderer from "../components/blocks/BlockRenderer";
import SummaryForm from "../components/blocks/SummaryForm";
import AddBlockButtons from "../components/blocks/AddBlockButtons";
import BlockFormRenderer from "../components/blocks/BlockFormRenderer";
import "./ViewNote.css";

function ViewNote() {
  const { id } = useParams();
  const [note, setNote] = useState(null);
  const [selectedBlock, setSelectedBlock] = useState(null);
  const [showSummaryForm, setShowSummaryForm] = useState(false);

  const loadNote = async () => {
    try {
      const data = await getNote(id);
      setNote(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadNote();
  }, [id]);

  const handleAddBlock = async (blockData) => {
    try {
      await addBlock(
        id,
        blockData
      );
      await loadNote();
      setSelectedBlock(null);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSaveSummary =
    async (summary) => {
      try {
        await addBlock(id, {
          type: "summary",
          content: summary,
        });
        setShowSummaryForm(false);
        await loadNote();
      } catch (error) {
        console.error(error);
      }
    };

  if (!note) {
    return (
      <div className="viewnote-loading">
        Loading...
      </div>
    );
  }

  return (
    <div className="viewnote-container">
      <div className="viewnote-header">
        <div>
          <h1 className="viewnote-title">
            {note.title}
          </h1>
          <p className="viewnote-date">
            Created{" "}
            {new Date(
              note.createdAt
            ).toLocaleDateString()}
            {" • "}
            Updated{" "}
            {new Date(
              note.updatedAt
            ).toLocaleDateString()}
          </p>
        </div>
        <div className="viewnote-buttons">
          <AddBlockButtons
            onSelect={(type) => {
              if (type === "summary") {
                setShowSummaryForm(true);
                setSelectedBlock(null);
              } else {
                setSelectedBlock(type);
                setShowSummaryForm(false);
              }
            }}
          />
        </div>
      </div>
      {selectedBlock && (
        <div className="viewnote-form-card">
          <h2 className="viewnote-form-title">
            Add New Block
          </h2>
          <BlockFormRenderer type={selectedBlock} onSave={handleAddBlock} onCancel={() => setSelectedBlock(null)} />
        </div>
      )}
      {showSummaryForm && (
        <div className="viewnote-form-card">
          <h2 className="viewnote-form-title">
            Generate AI Summary
          </h2>
          <SummaryForm onSave={handleSaveSummary} />
        </div>
      )}
      <div className="viewnote-blocks">
        {note.blocks?.length > 0 ? (note.blocks.map((block) => (
              <BlockRenderer key={block._id} block={block} />
            )
          )
        ) : (
          <div className="viewnote-empty">
            <div className="viewnote-empty-icon">
              📚
            </div>
            <h2 className="viewnote-empty-title">
              No Content Yet
            </h2>
            <p className="viewnote-empty-text">
              Add your first text, image, audio, video, definition or summary block.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ViewNote;