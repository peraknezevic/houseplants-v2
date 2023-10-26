import prisma from "@/prisma/client"
import Link from "next/link"
import Badge from "../_components/Badge"
import PageActions from "./PageActions"

const Pages = async () => {
  const pages = await prisma.page.findMany()

  return (
    <div className="space-y-2">
      <PageActions />
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
              <tr key={page.id} className="hover:bg-gray-200">
                <td>
                  <Link href={`/dashboard/pages/${page.slug}`}>
                    {page.title}
                  </Link>
                </td>
                <td>{page.slug}</td>
                <td>
                  <Badge published={page.published} />
                </td>
                <td className="space-x-2">
                  <Link
                    href={`/dashboard/pages/${page.slug}`}
                    className="btn-sm btn-primary"
                  >
                    Edit
                  </Link>
                  <Link
                    href={`/dashboard/pages/${page.slug}`}
                    className="btn-sm btn-error"
                  >
                    Delete
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export const dynamic = "force-dynamic"

export default Pages
