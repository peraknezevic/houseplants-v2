import Link from "next/link"

const PageActions = () => {
  return (
    <Link href="/dashboard/pages/new-page">
      <button className="btn btn-sm btn-neutral">Add New Page</button>
    </Link>
  )
}

export default PageActions
