import schema from "../schema"
import prisma from "@/prisma/client"

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const user = await prisma.user.findUnique({
    where: { id: Number(params.id) },
  })
  if (!user) return Response.json({ error: "User not found" }, { status: 404 })
  return Response.json(user)
}

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  const body = await request.json()

  const validation = schema.safeParse(body)

  if (!validation.success)
    return Response.json(validation.error.errors, { status: 400 })

  const user = await prisma.user.findUnique({
    where: {
      id: Number(params.id),
    },
  })

  if (!user) return Response.json({ error: "User not found" }, { status: 400 })

  const updatedUser = await prisma.user.update({
    where: { id: user.id },
    data: {
      name: body.name,
      email: body.email,
    },
  })

  return Response.json(updatedUser)
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  const body = await request.json()

  const user = await prisma.user.findUnique({
    where: {
      id: Number(params.id),
    },
  })

  if (!user) return Response.json({ error: "User not found" }, { status: 400 })

  const deleteUser = await prisma.user.delete({
    where: { id: user.id },
  })

  return Response.json({})
}
