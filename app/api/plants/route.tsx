import schema from "./schema"
import prisma from "@/prisma/client"

export async function GET(request: Request) {
  const plants = await prisma.plant.findMany()
  return Response.json(plants)
}

export async function POST(request: Request) {
  const body = await request.json()
  const validation = schema.safeParse(body)
  if (!validation.success)
    return Response.json(validation.error.errors, { status: 404 })
  const plant = await prisma.plant.findUnique({
    where: {
      slug: body.slug,
    },
  })
  if (plant)
    return Response.json(
      { error: "Plant profile already exists" },
      { status: 400 }
    )
  const newPlant = await prisma.plant.create({
    data: {
      title: body.title,
      slug: body.slug,
      genusName: body.genusName,
    },
  })
  return Response.json(newPlant, { status: 201 })
}
