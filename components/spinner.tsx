const Spinner = ({
  size = "sm",
  label = "Loading…",
}: {
  size?: "sm" | "lg";
  label?: string;
}) => {
  return (
    <span role="status" className="inline-flex items-center">
      <span
        aria-hidden="true"
        className={`inline-block animate-spin rounded-full border-2 border-current border-t-transparent ${
          size === "lg" ? "h-10 w-10" : "h-4 w-4"
        }`}
      />
      <span className="sr-only">{label}</span>
    </span>
  );
};

export default Spinner;
