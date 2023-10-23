import { z } from "zod"

const schema = z.object({
  title: z.string().min(3),
  slug: z.string().min(3),
  genusName: z.string().min(3),
})

export default schema
