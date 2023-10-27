import Link from "next/link"

const PageActions = ({ cat }: { cat: string }) => {
  return (
    <Link href={`/dashboard/${cat}/new`}>
      <button className="btn btn-sm btn-neutral">Add New</button>
    </Link>
  )
}

export default PageActions
