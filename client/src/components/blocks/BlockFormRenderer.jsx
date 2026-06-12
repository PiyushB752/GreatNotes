import TextBlockForm from "../forms/TextBlockForm";
import DefinitionBlockForm from "../forms/DefinitionBlockForm";
import ImageBlockForm from "../forms/ImageBlockForm";
import AudioBlockForm from "../forms/AudioBlockForm";
import YoutubeBlockForm from "../forms/YoutubeBlockForm";

function BlockFormRenderer({ type, onSave, onCancel }) {
  switch (type) {
    case "text":
      return <TextBlockForm onSave={onSave} onCancel={onCancel} />;
    case "definition":
      return <DefinitionBlockForm onSave={onSave} onCancel={onCancel} />;
    case "image":
      return <ImageBlockForm onSave={onSave} onCancel={onCancel} />;
    case "voice":
      return <AudioBlockForm onSave={onSave} onCancel={onCancel} />;
    case "youtube":
      return <YoutubeBlockForm onSave={onSave} onCancel={onCancel} />;
    default:
      return null;
  }
}

export default BlockFormRenderer;