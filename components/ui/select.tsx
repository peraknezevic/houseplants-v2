const Select = ({
  name,
  label,
  options,
  defaultValue,
}: {
  name: string;
  label: string;
  options: string[];
  defaultValue?: string;
}) => {
  return (
    <div className="flex items-baseline gap-8">
      <label htmlFor={name} className="text-gray-600">
        {label}
      </label>
      <select name={name} defaultValue={defaultValue}>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
