import { AdminButtonProps } from "@/lib/types";
import Link from "next/link";

export const ButtonEditItem = ({ slug, category }: AdminButtonProps) => {
  return (
    <button className="btn btn-neutral">
      <Link href={`/edit/${category}/${slug}`} className="no-underline">
        Edit
      </Link>
    </button>
  );
};
