import prisma from "@/prisma/client"
import Link from "next/link"
import Badge from "../components/Badge"

const Pages = async () => {
  const pages = await prisma.page.findMany()

  return (
    <div className="space-y-2">
      <Link href="/dashboard/pages/new-page">
        <button className="btn btn-sm btn-neutral">Add New Page</button>
      </Link>
      <div className="overflow-x-auto w-full">
        <table className="table border-gray-200 border">
          <thead>
            <tr className="m-2">
              <th>Page Title</th>
              <th>Page Slug</th>
              <th>Published</th>
            </tr>
          </thead>
          <tbody>
            {pages.map((page) => (
              <tr key={page.id}>
                <td>{page.title}</td>
                <td>{page.slug}</td>
                <td>
                  <Badge published={page.published} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Pages
