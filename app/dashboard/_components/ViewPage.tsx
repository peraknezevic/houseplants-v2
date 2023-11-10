import Link from "next/link";

const ViewPage = ({ slug, cat }: { slug: string; cat: string }) => {
  return (
    <Link href={`/${cat === "genera" ? "genus" : cat}/${slug}`}>
      <button className="btn btn-neutral btn-sm">View</button>
    </Link>
  );
};

export default ViewPage;
