import Link from "next/link";

const ViewButton = ({ slug, cat }: { slug: string; cat: string }) => {
  return (
    <button className="btn-green btn">
      <Link href={`/${cat === "genera" ? "genus" : cat}/${slug}`}>View</Link>
    </button>
  );
};

export default ViewButton;
