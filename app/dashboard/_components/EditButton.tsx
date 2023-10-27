import Link from "next/link"

const EditButton = ({ pageSlug }: { pageSlug: string }) => {
  return (
    <button className="btn-sm btn-neutral">
      <Link href={`/dashboard/pages/${pageSlug}`}>Edit</Link>
    </button>
  )
}

export default EditButton
