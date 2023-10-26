import { pagesSchema } from "@/app/validationSchemas"
import prisma from "@/prisma/client"

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const page = await prisma.page.findUnique({
    where: { slug: params.slug },
  })
  if (!page)
    return Response.json(
      { error: "This page could not be found" },
      { status: 404 }
    )
  return Response.json(page)
}

export async function PATCH(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const body = await request.json()

  const validation = pagesSchema.safeParse(body)

  if (!validation.success)
    return Response.json(validation.error.errors, { status: 400 })

  const page = await prisma.page.findUnique({
    where: {
      slug: params.slug,
    },
  })

  if (!page)
    return Response.json(
      { error: "This page could not be found." },
      { status: 404 }
    )

  const pageUpdate = await prisma.page.update({
    where: { slug: params.slug },
    data: {
      title: body.title,
      slug: body.slug,
      content: body.content,
      published: body.published,
    },
  })

  return Response.json(pageUpdate)
}

export async function DELETE(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const page = await prisma.page.findUnique({
    where: {
      slug: params.slug,
    },
  })

  if (!page)
    return Response.json(
      { error: "This page could not be found." },
      { status: 404 }
    )

  await prisma.page.delete({
    where: {
      slug: params.slug,
    },
  })

  return Response.json({})
}
