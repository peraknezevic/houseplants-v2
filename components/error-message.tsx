export default function ErrorMessage({
  children,
}: {
  children: React.ReactNode;
}) {
  if (!children) return null;
  return <p className="text-red-600">{children}</p>;
}
