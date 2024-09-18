const Label = ({ htmlFor, content }: { htmlFor: string; content: string }) => {
  return <label htmlFor={htmlFor} className="px-4 py-2 border-2 border-zinc-300 bg-zinc-300">{content}</label>;
};

export default Label;
