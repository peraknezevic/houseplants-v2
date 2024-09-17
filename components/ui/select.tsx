const Select = ({
  name,
  options,
  defaultValue,
}: {
  name: string;
  options: string[];
  defaultValue?: string;
}) => {
  return (
    <select name={name} defaultValue={defaultValue} className="px-4 py-2 border-2 border-zinc-300 bg-zinc-100">
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default Select;
