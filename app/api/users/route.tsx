import schema from "./schema"
import prisma from "@/prisma/client"

export async function GET(request: Request) {
  const users = await prisma.user.findMany()
  return Response.json(users)
}

export async function POST(request: Request) {
  const body = await request.json()
  const validation = schema.safeParse(body)
  if (!validation.success)
    return Response.json(validation.error.errors, { status: 404 })
  const user = await prisma.user.findUnique({
    where: {
      email: body.email,
    },
  })
  if (user)
    return Response.json({ error: "User already exists" }, { status: 400 })
  const newUser = await prisma.user.create({
    data: {
      name: body.name,
      email: body.email,
    },
  })
  return Response.json(newUser, { status: 201 })
}
