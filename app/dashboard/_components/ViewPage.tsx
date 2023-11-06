import Link from "next/link"

const ViewPage = ({ slug, cat }: { slug: string; cat: string }) => {
  return (
    <button className="btn btn-sm btn-neutral">
      <Link href={`/${cat === "genera" ? "genus" : cat}/${slug}`}>View</Link>
    </button>
  )
}

export default ViewPage
