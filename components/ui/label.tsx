const Label = ({ htmlFor, content }: { htmlFor: string; content: string }) => {
  return <label htmlFor={htmlFor} className="px-4 py-2 border border-zinc-300 bg-white">{content}</label>;
};

export default Label;
