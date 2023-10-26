import prisma from "@/prisma/client"
import { notFound } from "next/navigation"
import ReactMarkdown from "react-markdown"

const Page = async ({ params }: { params: { slug: string } }) => {
  const page = await prisma.page.findUnique({
    where: { slug: params.slug },
  })
  if (!page) notFound()

  return (
    <div className="prose p-10 w-full">
      <h1>{page.title}</h1>
      <div>
        <ReactMarkdown>{page.content}</ReactMarkdown>
      </div>
    </div>
  )
}

export default Page
