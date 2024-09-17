const Label = ({ htmlFor, content }: { htmlFor: string; content: string }) => {
  return <label htmlFor={htmlFor} className="px-2 py-2 ">{content}: </label>;
};

export default Label;
