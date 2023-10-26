import prisma from "@/prisma/client"
import Link from "next/link"
import Badge from "../_components/Badge"
import delay from "delay"
import PageActions from "./PageActions"

const Pages = async () => {
  const pages = await prisma.page.findMany()
  await delay(2000)
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
              <tr key={page.id}>
                <td>
                  <Link href={`/dashboard/pages/${page.slug}`}>
                    {page.title}
                  </Link>
                </td>
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
