import { TNode } from "@/lib/types";

export default function CardsGrid({ children }: TNode) {
  return (
    <ul className="grid grid-cols-2 gap-8 px-4 md:grid-cols-3">{children}</ul>
  );
}
