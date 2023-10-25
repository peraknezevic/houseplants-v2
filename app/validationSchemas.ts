import { z } from "zod"

export const pagesSchema = z.object({
  title: z.string().min(3).max(150),
  slug: z.string().min(3).max(150),
  content: z.string().min(100),
  published: z.enum(["PUBLISH", "DRAFT", "REVIEW"]),
})

export const articlesSchema = z.object({
  title: z.string().min(3).max(150),
  slug: z.string().min(3).max(150),
  content: z.string().min(100),
  published: z.enum(["PUBLISHED", "DRAFT", "REVIEW"]),
})

export const generaSchema = z.object({
  title: z.string().min(3).max(150),
  slug: z.string().min(3).max(150),
  intro: z.string().min(100),
  published: z.enum(["PUBLISHED", "DRAFT", "REVIEW"]),
})

export const plantSchema = z.object({
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

export const plantProfileSchema = z.object({
  slug: z.string().min(3).max(40),
  botanicalName: z.string().min(3).max(40),

  synonyms: z.string().min(3).max(250).optional(),
  namedBy: z.string().min(3).max(30).optional(),
  inventor: z.string().min(3).max(30).optional(),
  patent: z.string().min(3).max(30).optional(),
  tradeNames: z.string().min(3).max(250).optional(),
  commonNames: z.string().min(3).max(250).optional(),
  family: z.string().min(3).max(30).optional(),
  subFamily: z.string().min(3).max(30).optional(),
  genus: z.string().min(3).max(30),
  nativeArea: z.string().min(3).max(30).optional(),

  care: z.enum(["EASY", "AVARAGE", "DIFFICULT"]).optional(),
  light: z
    .enum([
      "LOW_LIGHT",
      "PARTIAL_SHADE",
      "MEDIUM_LIGHT",
      "BRIGHT_LIGHT",
      "FULL_SUN",
    ])
    .optional(),
  watering: z.string().min(3).max(30).optional(),
  soil: z.string().min(3).max(30).optional(),
  soilPH: z.string().min(3).max(30).optional(),
  humidity: z.enum(["LOW", "MEDIUM", "HIGH"]).optional(),
  feeding: z.string().min(3).max(30).optional(),
  minimalT: z.number().optional(),
  optimalT: z.number().optional(),
  speedOfGrowth: z.enum(["SLOW", "MODERATE", "FAST"]).optional(),
  matureSize: z.string().min(3).max(30).optional(),
  repotting: z.string().min(3).max(30).optional(),
  flower: z.string().min(3).max(150).optional(),
  propagation: z.string().min(3).max(150).optional(),
  toxicity: z.enum(["TOXIC", "NOT_TOXIC", "NO_INFO"]).optional(),
  pests: z.string().min(3).max(150).optional(),
  diseases: z.string().min(3).max(250).optional(),
  imageCredits: z.string().min(3).max(30).optional(),
  notes: z.string().min(3).max(500).optional(),

  published: z.enum(["PUBLISHED", "DRAFT", "REVIEW"]),
})
