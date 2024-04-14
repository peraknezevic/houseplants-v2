import Link from "next/link";

export const ButtonAddNew = ({ category }: { category: string }) => {
  return (
    <button className="btn-green btn">
      <Link href={`/${category}/new`}>Add New</Link>
    </button>
  );
};
