import prisma from "@/prisma/client"

const Pages = async () => {
  const pages = await prisma.page.findMany()

  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>id</th>
            <th>Title</th>
            <th>Slug</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          <tr>
            <th>1</th>
            <td>Cy Ganderton</td>
            <td>Quality Control Specialist</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Pages
