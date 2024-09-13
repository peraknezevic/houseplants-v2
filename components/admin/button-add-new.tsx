import Link from "next/link";

export const ButtonAddNew = ({ category }: { category: string }) => {
  return (
    <button className="btn-green btn">
      <Link href={`/admin/${category}/add`}>Add New</Link>
    </button>
  );
};
