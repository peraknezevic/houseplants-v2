import ReactMarkdown from "react-markdown";

const Markdown = ({ title, content }: { title?: string; content: string }) => {
  return (
    <div className="px-8 pb-6">
      {title && <span className="block pb-2 font-semibold">{title}</span>}
      <div className="**:list-inside **:list-disc **:pb-2 **:leading-8">
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    </div>
  );
};

export default Markdown;
