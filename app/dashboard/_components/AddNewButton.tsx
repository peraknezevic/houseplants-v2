import Link from "next/link";

const AddNewButton = ({ cat }: { cat: string }) => {
  return (
    <Link href={`/dashboard/${cat}/new`}>
      <button className="btn btn-neutral btn-sm">Add New</button>
    </Link>
  );
};

export default AddNewButton;
