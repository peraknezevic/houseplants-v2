import prisma from "@/prisma/client"
import PageForm from "../_components/PageForm"
import { notFound } from "next/navigation"

interface Props {
  params: { slug: string }
}

const EditPage = async ({ params }: Props) => {
  const page = await prisma.page.findUnique({
    where: { slug: params.slug },
  })
  if (!page) notFound()

  return <PageForm page={page} />
}

export default EditPage
