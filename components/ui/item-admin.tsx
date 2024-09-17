import Link from "next/link";

const ItemAdmin = ({title, href, status}: {title: string, href: string, status: "PUBLISHED" | "DRAFT" | "REVIEW"}) => {
  return <Link href={href} className="text-xl border-[1px] text-zinc-600 border-zinc-100 px-4 py-2 block hover:bg-zinc-100">{title}</Link>
};

export default ItemAdmin;