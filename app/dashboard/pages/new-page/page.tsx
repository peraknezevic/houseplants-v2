import dynamic from "next/dynamic"

const PageForm = dynamic(
  () => import("@/app/dashboard/pages/_components/PageForm"),
  {
    ssr: false,
  }
)

const NewPage = () => {
  return <PageForm />
}

export default NewPage
