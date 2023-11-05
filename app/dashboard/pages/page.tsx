import prisma from "@/prisma/client"
import PublishedBadge from "../_components/PublishedBadge"
import PageActions from "../_components/PageActions"
import DeleteButton from "../_components/DeleteButton"
import EditButton from "../_components/EditButton"

const cat = "pages"

const Pages = async () => {
  const pages = await prisma.page.findMany()

  return (
    <div className="space-y-2">
      <PageActions cat={cat} />
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
                <td>{page.title}</td>
                <td>{page.slug}</td>
                <td>
                  <PublishedBadge published={page.published} />
                </td>
                <td className="space-x-2">
                  <EditButton cat={cat} slug={page.slug} />
                  <DeleteButton cat={cat} slug={page.slug} />
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
