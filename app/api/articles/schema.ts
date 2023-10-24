import { z } from "zod"

const schema = z.object({
  title: z.string().min(3).max(150),
  slug: z.string().min(3).max(150),
  content: z.string().min(100),
})

export default schema
