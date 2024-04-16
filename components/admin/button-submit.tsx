type ButtonSubmitProps = {
  actionType: "add" | "edit";
  category: string;
};

export default function ButtonSubmit({
  actionType,
  category,
}: ButtonSubmitProps) {
  return (
    <button type="submit" className="mt-5 self-end">
      {actionType === "add" ? `Add new ${category}` : `Edit ${category}`}
    </button>
  );
}
