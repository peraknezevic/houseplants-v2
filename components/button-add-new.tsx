import Link from "next/link";

export default function ButtonAddNew({ cat }: { cat: string }) {
  return (
    <button className="btn-black btn">
      <Link href={`/dashboard/${cat}/new`}>Add New</Link>
    </button>
  );
}
