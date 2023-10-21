import schema from "../schema"

export function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  return Response.json({
    slug: "monstera-deliciosa",
    title: "Monstera deliciosa",
  })
}

export async function PUT(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const body = await request.json()

  const validation = schema.safeParse(body)

  if (!validation.success)
    return Response.json(validation.error.errors, { status: 400 })

  return Response.json({ id: 1, title: body.title }, { status: 201 })
}

export async function DELETE(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const body = await request.json()

  return Response.json({})
}
