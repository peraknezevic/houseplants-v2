export default function CardsGrid({ children }: { children: React.ReactNode }) {
  return (
    <ul className="grid grid-cols-2 gap-8 px-4 md:grid-cols-3">{children}</ul>
  );
}
