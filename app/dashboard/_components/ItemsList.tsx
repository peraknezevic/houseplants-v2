import Badge from "../_components/Badge"
import PageActions from "./PageActions"
import DeleteButton from "./DeleteButton"
import EditButton from "./EditButton"
import { Page } from "@prisma/client"

const ItemsList = async ({ items }: any) => {
  console.log(items)
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
            {items.map((item: Page) => (
              <tr key={item.id} className="hover:bg-gray-200">
                <td>{item.title}</td>
                <td>{item.slug}</td>
                <td>
                  <Badge published={item.published} />
                </td>
                <td className="space-x-2">
                  <EditButton pageSlug={item.slug} />
                  <DeleteButton pageSlug={item.slug} />
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

export default ItemsList
