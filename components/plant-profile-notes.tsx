import ReactMarkdown from "react-markdown";

const PlantProfileNotes = ({ content }: { content: string }) => {
  return (
    <div className="px-8 pb-6">
      <span className="font-semibold">Notes</span>
      <br />
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
};

export default PlantProfileNotes;
