import { z } from "zod"

export const pagesSchema = z.object({
  title: z.string().min(3).max(150),
  slug: z.string().min(3).max(150),
  content: z.string().min(100),
  published: z.enum(["PUBLISHED", "DRAFT", "REVIEW"]),
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
  intro: z.string(),
  thanks: z.string(),
  changeLog: z.string(),
  published: z.enum(["PUBLISHED", "DRAFT", "REVIEW"]),
})

export const plantSchema = z.object({
  slug: z.string().min(3).max(40),
  botanicalName: z.string().min(3).max(40),
  hasProfile: z.boolean().optional(),

  isSpecies: z.boolean().optional(),
  isCultivar: z.boolean().optional(),
  isHybrid: z.boolean().optional(),

  children: z.string().optional(),
  parents: z.string().optional(),

  genusPageSlug: z.string().min(3).max(20),

  synonyms: z.string().min(3).max(250).optional().or(z.literal("")),
  tradeNames: z.string().min(3).max(250).optional().or(z.literal("")),
  commonNames: z.string().min(3).max(250).optional().or(z.literal("")),
  namedBy: z.string().min(3).max(100).optional().or(z.literal("")),
  inventor: z.string().min(3).max(100).optional().or(z.literal("")),
  patent: z.string().min(3).max(30).optional().or(z.literal("")),
  nativeArea: z.string().min(3).max(250).optional().or(z.literal("")),

  hasImage: z.boolean().optional(),
  imageCredits: z.string().min(3).max(200).optional().or(z.literal("")),
})

export const plantProfileSchema = z.object({
  slug: z.string().min(3).max(40),
  title: z.string().min(3).max(40),
  botanicalName: z.string().min(3).max(40),
  synonyms: z.string().min(3).max(250).optional().or(z.literal("")),
  namedBy: z.string().min(3).max(30).optional().or(z.literal("")),
  inventor: z.string().min(3).max(30).optional().or(z.literal("")),
  patent: z.string().min(3).max(30).optional().or(z.literal("")),
  tradeNames: z.string().min(3).max(250).optional().or(z.literal("")),
  commonNames: z.string().min(3).max(250).optional().or(z.literal("")),
  family: z.string().min(3).max(30).optional().or(z.literal("")),
  subFamily: z.string().min(3).max(30).optional().or(z.literal("")),
  genus: z.string().min(3).max(30),
  nativeArea: z.string().min(3).max(30).optional().or(z.literal("")),
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
  watering: z.string().min(3).max(150).optional().or(z.literal("")),
  soil: z.string().min(3).max(150).optional().or(z.literal("")),
  soilPH: z.string().min(3).max(30).optional().or(z.literal("")),
  humidity: z.enum(["LOW", "MEDIUM", "HIGH"]).optional(),
  feeding: z.string().min(3).max(30).optional().or(z.literal("")),
  minimalT: z.number().optional(),
  optimalT: z.number().optional(),
  speedOfGrowth: z.enum(["SLOW", "MODERATE", "FAST"]).optional(),
  matureSize: z.string().min(3).max(30).optional().or(z.literal("")),
  repotting: z.string().min(3).max(200).optional().or(z.literal("")),
  flower: z.string().min(3).max(150).optional().or(z.literal("")),
  propagation: z.string().min(3).max(150).optional().or(z.literal("")),
  toxicity: z.enum(["TOXIC", "NOT_TOXIC", "NO_INFO"]).optional(),
  pests: z.string().min(3).max(200).optional().or(z.literal("")),
  diseases: z.string().min(3).max(250).optional().or(z.literal("")),
  imageCredits: z.string().min(3).max(200).optional().or(z.literal("")),
  notes: z.string().min(3).max(500).optional().or(z.literal("")),

  published: z.enum(["PUBLISHED", "DRAFT", "REVIEW"]),
})
