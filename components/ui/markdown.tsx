import ReactMarkdown from "react-markdown";

const Markdown = ({ title, content }: { title?: string; content: string }) => {
  return (
    <div className="px-8 pb-6">
      {title && <span className="block pb-2 font-semibold">{title}</span>}
      <ReactMarkdown className="*:list-inside *:list-disc *:pb-2 *:leading-8 [&>h2]:font-semibold [&>h2]:font-sans [&>h2]:text-2xl [&>h2]:pt-4">
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default Markdown;
