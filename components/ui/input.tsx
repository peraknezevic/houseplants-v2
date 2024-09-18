const Input = ({
  name,
  label,
  type,
  placeholder,
  defaultValue,
}: {
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
  defaultValue?: string | boolean | number;
}) => {
  if (type === "checkbox" && defaultValue === true) {
    return (
      <div className="col-span-2">
        <input name={name} type="checkbox" defaultChecked />
        <label htmlFor={name} className="px-4 py-2">
          {label}
        </label>
      </div>
    );
  }
  if (type === "checkbox" && defaultValue === false) {
    return (
      <div className="col-span-2">
        <input name={name} type="checkbox" />
        <label htmlFor={name} className="px-4 py-2">
          {label}
        </label>
      </div>
    );
  }
  if (type === "text" || type === "number" || type === "password") {
    return (
      <div className="col-span-6">
        <label htmlFor={name} className="text-gray-600">
          {label}
        </label>
        <input
          name={name}
          type={type || "text"}
          placeholder={placeholder || ""}
          defaultValue={defaultValue as string}
          className="mt-1 h-10 w-full rounded border bg-gray-50 px-4 text-gray-600 placeholder-gray-400"
        />
      </div>
    );
  }
};

export default Input;
