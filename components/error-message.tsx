const ErrorMessage = ({ errors }: { errors: string[] }) => {
  if (errors.length === 0) return null;

  const text = errors.join(", ");

  return <div className="peer col-span-6 text-red-600">{text}</div>;
};

export default ErrorMessage;
