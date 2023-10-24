import schema from "./schema"
import prisma from "@/prisma/client"

export async function GET(request: Request) {
  const pages = await prisma.genusPage.findMany()
  return Response.json(pages)
}

export async function POST(request: Request) {
  const body = await request.json()
  const validation = schema.safeParse(body)

  if (!validation.success)
    return Response.json(validation.error.errors, { status: 400 })

  const findGenus = await prisma.genusPage.findUnique({
    where: {
      slug: body.slug,
    },
  })

  if (findGenus)
    return Response.json({ error: "Genus already exists" }, { status: 400 })

  const newGenus = await prisma.genusPage.create({
    data: {
      title: body.title,
      slug: body.slug,
      intro: body.intro,
    },
  })
  return Response.json(newGenus, { status: 201 })
}