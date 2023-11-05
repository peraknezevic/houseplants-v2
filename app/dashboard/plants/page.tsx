import prisma from "@/prisma/client"
import PageActions from "../_components/PageActions"
import DeleteButton from "../_components/DeleteButton"
import EditButton from "../_components/EditButton"
import BoolBadge from "../_components/BoolBadge"

const cat = "plants"

const Plants = async () => {
  const plants = await prisma.plant.findMany()

  return (
    <div className="space-y-2">
      <PageActions cat={cat} />
      <div className="overflow-x-auto w-full">
        <table className="table border-gray-200 border">
          <thead>
            <tr className="m-2">
              <th>Botanical Name</th>
              <th>Type</th>
              <th>Image</th>
              <th>Image Credits</th>
              <th>Profile</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {plants.map((plant) => (
              <tr key={plant.id} className="hover:bg-gray-200">
                <td>{plant.botanicalName}</td>
                <td>
                  {plant.isSpecies && "Species"}
                  {plant.isCultivar && "Cultivar"} {plant.isHybrid && "Hybrid"}
                </td>
                <td>
                  <BoolBadge bool={plant.hasImage} />
                </td>
                <td>
                  <BoolBadge bool={plant.imageCredits !== ""} />
                </td>
                <td>
                  <BoolBadge bool={plant.hasProfile} />
                </td>
                <td className="space-x-2">
                  <EditButton cat={cat} slug={plant.slug} />
                  <DeleteButton cat={cat} slug={plant.slug} />
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

export default Plants
