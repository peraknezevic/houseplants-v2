import prisma from "@/prisma/client"
import PlantProfileForm from "../_components/PlantProfileForm"
import { notFound } from "next/navigation"

interface Props {
  params: { slug: string }
}

const EditPlantProfile = async ({ params }: Props) => {
  const plantProfile = await prisma.plantProfile.findUnique({
    where: { slug: params.slug },
  })
  if (!plantProfile) notFound()

  return <PlantProfileForm plantProfile={plantProfile} />
}

export default EditPlantProfile
