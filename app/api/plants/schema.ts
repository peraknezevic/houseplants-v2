import { z } from "zod"

const schema = z.object({
  slug: z.string().min(3).max(40),
  botanicalName: z.string().min(3).max(40),
  hasProfile: z.boolean().optional(),

  species: z.boolean().optional(),
  cultivar: z.boolean().optional(),
  hybrid: z.boolean().optional(),

  children: z.string().array().optional(),
  parents: z.string().array().optional(),

  genusPageSlug: z.string().min(3).max(20),

  synonyms: z.string().min(3).max(250).optional(),
  tradeNames: z.string().min(3).max(250).optional(),
  commonNames: z.string().min(3).max(250).optional(),
  namedBy: z.string().min(3).max(30).optional(),
  inventor: z.string().min(3).max(30).optional(),
  patent: z.string().min(3).max(30).optional(),
  nativeArea: z.string().min(3).max(250).optional(),

  imageCredits: z.string().min(3).max(30).optional(),
})

export default schema
