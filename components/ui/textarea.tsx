const Textarea = ({
  name,
  placeholder,
  defaultValue,
}: {
  name: string;
  placeholder?: string;
  defaultValue?: string;
}) => {
  return (
    <textarea
      name={name}
      placeholder={placeholder}
      defaultValue={defaultValue}
      rows={10}
      className="px-4 py-2 border-2 border-zinc-300 bg-zinc-100"
    />
  );
};

export default Textarea;
