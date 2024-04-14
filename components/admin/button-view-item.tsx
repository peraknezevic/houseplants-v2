import { AdminButtonProps } from "@/lib/types";
import Link from "next/link";

export const ButtonViewItem = ({ slug, category }: AdminButtonProps) => {
  return (
    <button className="btn-green btn">
      <Link href={`/${category === "plants" ? "plant" : category}/${slug}`}>
        View
      </Link>
    </button>
  );
};
