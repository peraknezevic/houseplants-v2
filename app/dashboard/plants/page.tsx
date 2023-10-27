import prisma from "@/prisma/client"
import ItemsList from "../_components/ItemsList"

const PlantsList = async () => {
  const items = await prisma.plant.findMany()
  return (
    <>
      <ItemsList items={items} />
    </>
  )
}

export default PlantsList
