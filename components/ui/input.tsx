
const Input = ({
  name,
  type,
  placeholder,
  defaultValue,
}: {
  name: string;
  type?: string;
  placeholder?: string;
  defaultValue?: string | boolean | number;
  }) => {
  if (type === "checkbox" && defaultValue === true) {
    return (
      <div className="px-4 py-2 border-2 border-zinc-300 bg-zinc-100">
      <input
        name={name}
        type="checkbox"
        defaultChecked
        />
        </div>
    )
  }
  if (type === "checkbox" && defaultValue === false) {
    return (
      <div className="px-4 py-2 border-2 border-zinc-300 bg-zinc-100 ">
      <input
        name={name}
        type="checkbox"
      />
      </div>
    )
  }
  if (type === "text" || type === "number" || type === "password") {
    return (
      <input
        name={name}
        type={type || "text"}
        placeholder={placeholder || ""}
        defaultValue={defaultValue as string}
        className="px-4 py-2 border-2 border-zinc-300 bg-zinc-100 grow"
      />
    )
  }
};

export default Input;
