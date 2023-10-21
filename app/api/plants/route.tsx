import schema from "./schema"

export function GET(request: Request) {
  return Response.json([
    { id: 1, title: "Dischidia ovata", slug: "dischidia-ovata" },
    { id: 2, title: "Calathea orbifolia", slug: "calathea-orbifolia" },
    { id: 3, title: "Caladium 'Pink Splash'", slug: "caladium-pink-splash" },
  ])
}

export async function POST(request: Request) {
  const body = await request.json()
  const validation = schema.safeParse(body)
  if (!validation.success)
    return Response.json(validation.error.errors, { status: 400 })
  return Response.json({ title: body.title }, { status: 201 })
}
