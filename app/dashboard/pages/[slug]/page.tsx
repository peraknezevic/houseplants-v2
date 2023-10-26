import prisma from "@/prisma/client"
import { notFound } from "next/navigation"

interface Props {
  params: {
    slug: string
  }
}

const PageDetails = async ({ params }: Props) => {
  const page = await prisma.page.findUnique({
    where: { slug: params.slug },
  })
  if (!page) notFound()

  return (
    <div>
      <h1>{page.title}</h1>
      <>{page.content}</>
    </div>
  )
}

export default PageDetails
