import schema from "../schema"
import prisma from "@/prisma/client"

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const plant = await prisma.plant.findUnique({
    where: { slug: params.slug },
  })
  if (!plant)
    return Response.json(
      { error: "There's no profile page for that plant" },
      { status: 404 }
    )
  return Response.json(plant)
}

export async function PUT(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const body = await request.json()

  const validation = schema.safeParse(body)

  if (!validation.success)
    return Response.json(validation.error.errors, { status: 400 })

  const plant = await prisma.plant.findUnique({
    where: {
      slug: params.slug,
    },
  })

  if (!plant)
    return Response.json(
      { error: "There's no profile page for that plant" },
      { status: 400 }
    )

  const updatedPlant = await prisma.plant.update({
    where: { slug: plant.slug },
    data: {
      slug: body.slug,
      title: body.title,
    },
  })

  return Response.json(updatedPlant)
}

export async function DELETE(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const body = await request.json()

  return Response.json({})
}
