import Link from "next/link"

const EditButton = ({ slug, cat }: { slug: string; cat: string }) => {
  return (
    <button className="btn btn-sm btn-secondary">
      <Link href={`/dashboard/${cat}/${slug}`}>Edit</Link>
    </button>
  )
}

export default EditButton
