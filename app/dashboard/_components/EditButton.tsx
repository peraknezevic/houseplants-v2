import Link from "next/link";

const EditButton = ({ slug, cat }: { slug: string; cat: string }) => {
  return (
    <button className="btn btn-neutral">
      <Link href={`/dashboard/${cat}/${slug}`} className="no-underline">
        Edit
      </Link>
    </button>
  );
};

export default EditButton;
