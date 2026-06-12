import ReactMarkdown from "react-markdown";
import "./BlockRenderer.css";

function BlockRenderer({ block }) {
  switch (block.type) {
    case "text":
      return (
        <div className="block-container">
          <p className="block-text">{block.content}</p>
        </div>
      );
    case "image":
      return (
        <div className="block-container">
          <img src={block.content} alt="Note" className="block-image" />
        </div>
      );
    case "voice":
      return (
        <div className="block-container">
          <audio controls className="block-audio">
            <source src={block.content} />
          </audio>
        </div>
      );
    case "youtube":
      const embedUrl = block.content.replace("watch?v=", "embed/");
      return (
        <div className="block-container">
          <iframe width="100%" height="400" src={embedUrl} title="YouTube Video" allowFullScreen className="block-video" />
        </div>
      );
    case "definition":
      return (
        <div className="block-container">
          <h3 className="definition-title">{block.term}</h3>
          <p className="definition-text">{block.definition}</p>
        </div>
      );
    case "summary":
      return (
        <div className="block-container">
          <h2 className="summary-title">Summary</h2>
          <div className="summary-content">
            <ReactMarkdown>{block.content}</ReactMarkdown>
          </div>
        </div>
      );
    default:
      return null;
  }
}

export default BlockRenderer;