import PlantProfileForm from "@/app/dashboard/plant-profiles/_components/PlantProfileForm"
import dynamic from "next/dynamic"

const NewPlantProfile = dynamic(
  () => import("@/app/dashboard/plant-profiles/_components/PlantProfileForm"),
  {
    ssr: false,
  }
)

const NewPage = () => {
  return <NewPlantProfile />
}

export default NewPage
