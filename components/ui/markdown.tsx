import ReactMarkdown from "react-markdown";

const Markdown = ({ title, content }: { title?: string; content: string }) => {
  return (
    <div className="px-8 pb-6">
      {title && <h2 className="pb-2 font-semibold">{title}</h2>}
      <div className="[&>*]:pb-2 [&>*]:leading-8 [&_a]:underline [&_a]:underline-offset-4 [&_ol]:list-inside [&_ol]:list-decimal [&_ul]:list-inside [&_ul]:list-disc">
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    </div>
  );
};

export default Markdown;
