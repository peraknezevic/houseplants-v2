import schema from "../schema"
import prisma from "@/prisma/client"

export async function GET(
  request: Request,
  { params }: { params: { id: number } }
) {
  const user = await prisma.user.findUnique({
    where: { id: Number(params.id) },
  })
  if (!user) return Response.json({ error: "User not found" }, { status: 404 })
  return Response.json(user)
}
