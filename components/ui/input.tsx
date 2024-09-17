const Input = ({
  name,
  type,
  placeholder,
  defaultValue,
}: {
  name: string;
  type?: string;
  placeholder?: string;
  defaultValue?: string;
}) => {
  return (
    <input
      name={name}
      type={type || "text"}
      placeholder={placeholder || ""}
      defaultValue={defaultValue}
      className="px-4 py-2 border-2 border-zinc-300 bg-zinc-100"
    />
  );
};

export default Input;
