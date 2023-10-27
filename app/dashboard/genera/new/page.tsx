import dynamic from "next/dynamic"

const GenusForm = dynamic(
  () => import("@/app/dashboard/genera/_components/GenusForm"),
  {
    ssr: false,
  }
)

const NewGenus = () => {
  return <GenusForm />
}

export default NewGenus
