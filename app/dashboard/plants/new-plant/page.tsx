import PlantForm from "@/app/dashboard/plants/_components/PlantForm"
import dynamic from "next/dynamic"

const PageForm = dynamic(
  () => import("@/app/dashboard/plants/_components/PlantForm"),
  {
    ssr: false,
  }
)

const NewPage = () => {
  return <PlantForm />
}

export default NewPage
