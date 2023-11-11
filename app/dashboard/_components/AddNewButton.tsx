import Link from "next/link";

const AddNewButton = ({ cat }: { cat: string }) => {
  return (
    <button className="btn-black btn">
      <Link href={`/dashboard/${cat}/new`}>Add New</Link>
    </button>
  );
};

export default AddNewButton;
