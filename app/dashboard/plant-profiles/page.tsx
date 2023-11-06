import prisma from "@/prisma/client"
import PageActions from "../_components/PageActions"
import DeleteButton from "../_components/DeleteButton"
import EditButton from "../_components/EditButton"
import PublishedBadge from "../_components/PublishedBadge"

const cat = "plant-profiles"

const PlantProfiles = async () => {
  const plantProfiles = await prisma.plantProfile.findMany()

  return (
    <div className="space-y-2">
      <PageActions cat={cat} />
      <div className="overflow-x-auto w-full">
        <table className="table border-gray-200 border">
          <thead>
            <tr className="m-2">
              <th>Botanical Name</th>
              <th>Published</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {plantProfiles.map((plantProfiles) => (
              <tr key={plantProfiles.id} className="hover:bg-gray-200">
                <td>{plantProfiles.botanicalName}</td>
                <td>
                  <PublishedBadge published={plantProfiles.published} />
                </td>
                <td className="space-x-2">
                  <EditButton cat={cat} slug={plantProfiles.slug} />
                  <DeleteButton cat={cat} slug={plantProfiles.slug} />
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

export default PlantProfiles