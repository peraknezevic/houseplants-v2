import { TNode } from "@/lib/types";

export default function ErrorMessage({ children }: TNode) {
  if (!children) return null;
  return <p className="text-red-600">{children}</p>;
}
