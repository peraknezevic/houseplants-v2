import Link from "next/link"

const PageActions = ({ cat }: { cat: string }) => {
  return (
    <div className="mt-4 mb-4">
      <Link href={`/dashboard/${cat}/new`}>
        <button className="btn btn-sm btn-neutral">Add New</button>
      </Link>
    </div>
  )
}

export default PageActions
