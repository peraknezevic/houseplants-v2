import prisma from "@/prisma/client"
import Badge from "../_components/PublishedBadge"
import PageActions from "../_components/PageActions"
import DeleteButton from "../_components/DeleteButton"
import EditButton from "../_components/EditButton"

const Pages = async () => {
  const cat = "genera"
  const genera = await prisma.genusPage.findMany()

  return (
    <div className="space-y-2">
      <PageActions cat={cat} />
      <div className="overflow-x-auto w-full">
        <table className="table border-gray-200 border">
          <thead>
            <tr className="m-2">
              <th>Genus Title</th>
              <th>Genus Slug</th>
              <th>Published</th>
            </tr>
          </thead>
          <tbody>
            {genera.map((genus) => (
              <tr key={genus.id} className="hover:bg-gray-200">
                <td>{genus.title}</td>
                <td>{genus.slug}</td>
                <td>
                  <Badge published={genus.published} />
                </td>
                <td className="space-x-2">
                  <EditButton cat={cat} slug={genus.slug} />
                  <DeleteButton cat={cat} slug={genus.slug} />
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
