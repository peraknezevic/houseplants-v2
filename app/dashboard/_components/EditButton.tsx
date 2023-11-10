import Link from "next/link";

const EditButton = ({ slug, cat }: { slug: string; cat: string }) => {
  return (
    <Link href={`/dashboard/${cat}/${slug}`} className="no-underline">
      <button className="btn btn-secondary btn-sm">Edit</button>
    </Link>
  );
};

export default EditButton;
