const Textarea = ({
  name,
  label,
  placeholder,
  defaultValue,
}: {
  name: string;
  label: string;
  placeholder?: string;
  defaultValue?: string;
}) => {
  return (
    <div className="col-span-6 flex flex-col">
      <label htmlFor={name} className="text-gray-600">
        {label}
      </label>
      <textarea
        name={name}
        placeholder={placeholder}
        defaultValue={defaultValue}
        rows={10}
        className="rounded border bg-gray-50 px-4 py-2 text-gray-600 placeholder-gray-400"
      />
    </div>
  );
};

export default Textarea;
