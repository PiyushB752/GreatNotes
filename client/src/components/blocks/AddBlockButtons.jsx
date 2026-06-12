import "./AddBlockButtons.css";

function AddBlockButtons({ onSelect }) {
  const blocks = [
    {
      type: "text",
      label: "📝 Add Text",
    },
    {
      type: "definition",
      label: "📖 Add Definition",
    },
    {
      type: "image",
      label: "🖼 Add Image",
    },
    {
      type: "voice",
      label: "🎵 Add Audio",
    },
    {
      type: "youtube",
      label: "🎥 Add YouTube",
    },
    {
      type: "summary",
      label: "🤖 Use AI Summarizer",
    },
  ];

  return (
    <div className="add-block-buttons">
      {blocks.map((block) => (
        <button key={block.type} onClick={() => onSelect(block.type)} className="block-button" >
          {block.label}
        </button>
      ))}
    </div>
  );
}

export default AddBlockButtons;