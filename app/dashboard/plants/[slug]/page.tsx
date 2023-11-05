import prisma from "@/prisma/client"
import PlantForm from "../_components/PlantForm"
import { notFound } from "next/navigation"

interface Props {
  params: { slug: string }
}

const EditPlant = async ({ params }: Props) => {
  const plant = await prisma.plant.findUnique({
    where: { slug: params.slug },
  })
  if (!plant) notFound()

  return <PlantForm plant={plant} />
}

export default EditPlant
