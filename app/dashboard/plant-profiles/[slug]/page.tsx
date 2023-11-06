import prisma from "@/prisma/client"
import dynamic from "next/dynamic"
import { notFound } from "next/navigation"

const PlantProfile = dynamic(
  () => import("@/app/dashboard/plant-profiles/_components/PlantProfileForm"),
  {
    ssr: false,
  }
)

interface Props {
  params: { slug: string }
}

const EditPlantProfile = async ({ params }: Props) => {
  const plantProfile = await prisma.plantProfile.findUnique({
    where: { slug: params.slug },
  })
  if (!plantProfile) notFound()

  return <PlantProfile plant={plantProfile} />
}

export default EditPlantProfile
