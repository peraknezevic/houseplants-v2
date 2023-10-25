import { pagesSchema } from "@/app/validationSchemas"
import prisma from "@/prisma/client"

export async function GET(request: Request) {
  const pages = await prisma.page.findMany()
  return Response.json(pages)
}

export async function POST(request: Request) {
  const body = await request.json()
  const validation = pagesSchema.safeParse(body)

  if (!validation.success)
    return Response.json(validation.error.errors, { status: 400 })

  const findPage = await prisma.page.findUnique({
    where: {
      slug: body.slug,
    },
  })

  if (findPage)
    return Response.json({ error: "Page already exists" }, { status: 400 })

  const newPage = await prisma.page.create({
    data: {
      title: body.title,
      slug: body.slug,
      content: body.content,
      published: body.published,
    },
  })
  return Response.json(newPage, { status: 201 })
}
