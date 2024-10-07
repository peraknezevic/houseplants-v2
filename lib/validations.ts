import { z } from "zod";

export const pageSchema = z.object({
  id: z.string(),
  title: z.string().min(3).max(150),
  slug: z.string().min(3).max(150),
  content: z.string().min(10),
  published: z.enum(["PUBLISHED", "DRAFT", "REVIEW"]),
});

export const pageFormSchema = pageSchema.omit({ id: true });

export const articleSchema = z.object({
  id: z.string(),
  title: z.string().min(3).max(150),
  slug: z.string().min(3).max(150),
  intro: z.string().min(20).or(z.literal("")),
  content: z.string().min(3),
  imageSlug: z.string().min(3).max(200).or(z.literal("")),
  imageCredits: z.string().min(3).max(200).or(z.literal("")),
  published: z.enum(["PUBLISHED", "DRAFT", "REVIEW"]),
  language: z.enum(["ENGLISH", "SRPSKI"]),
});

export const articleFormSchema = articleSchema.omit({ id: true });

export const generaSchema = z.object({
  id: z.string(),
  title: z.string().min(3).max(150),
  slug: z.string().min(3).max(150),
  intro: z.string(),
  uvod: z.string().nullish().or(z.literal("")),
  thanks: z.string().optional().nullish().or(z.literal("")),
  hvala: z.string().optional().nullish().or(z.literal("")),
  changeLog: z.string(),
  promene: z.string().optional().nullish().or(z.literal("")),
  published: z.enum(["PUBLISHED", "DRAFT", "REVIEW"]),
});

export const generaFormSchema = generaSchema.omit({ id: true });

export const plantSchema = z.object({
  id: z.string(),
  slug: z.string().min(3).max(80),
  title: z.string().min(3).max(80),
  hasProfile: z.boolean().optional(),

  isSpecies: z.boolean().optional(),
  isCultivar: z.boolean().optional(),
  isHybrid: z.boolean().optional(),
  isUnsorted: z.boolean().optional(),

  children: z.string().optional().nullish().or(z.literal("")),
  parents: z.string().optional().nullish().or(z.literal("")),

  genusPageSlug: z.string().min(3).max(20).or(z.literal("")),

  synonyms: z.string().min(3).max(500).optional().nullish().or(z.literal("")),
  tradeNames: z.string().min(3).max(250).optional().nullish().or(z.literal("")),
  narodniNaziv: z
    .string()
    .min(3)
    .max(250)
    .optional()
    .nullish()
    .or(z.literal("")),
  commonNames: z
    .string()
    .min(3)
    .max(250)
    .optional()
    .nullish()
    .or(z.literal("")),
  namedBy: z.string().min(3).max(100).optional().nullish().or(z.literal("")),
  inventor: z.string().min(3).max(100).optional().nullish().or(z.literal("")),
  patent: z.string().min(3).max(30).optional().nullish().or(z.literal("")),
  nativeArea: z.string().min(3).max(500).optional().nullish().or(z.literal("")),
  note: z.string().min(3).max(250).optional().nullish().or(z.literal("")),
  beleske: z.string().min(3).max(250).optional().nullish().or(z.literal("")),

  hasImage: z.boolean().optional(),
  imageCredits: z
    .string()
    .min(3)
    .max(200)
    .optional()
    .nullish()
    .or(z.literal("")),
  imagesForApproval: z.string().min(3).optional().nullish().or(z.literal("")),
  published: z.enum(["PUBLISHED", "DRAFT", "REVIEW"]),
});

export const plantFormSchema = plantSchema.omit({ id: true });

export const plantProfileSchema = z.object({
  id: z.string(),
  slug: z.string().min(3).max(40),
  title: z.string().min(3).max(40),
  botanicalName: z.string().min(3).max(40),
  synonyms: z.string().optional().nullish().or(z.literal("")),
  namedBy: z.string().optional().nullish().or(z.literal("")),
  inventor: z.string().optional().nullish().or(z.literal("")),
  patent: z.string().optional().nullish().or(z.literal("")),
  tradeNames: z.string().optional().nullish().or(z.literal("")),
  commonNames: z.string().optional().nullish().or(z.literal("")),
  narodniNaziv: z.string().optional().nullish().or(z.literal("")),
  family: z.string().optional().nullish().or(z.literal("")),
  subFamily: z.string().optional().nullish().or(z.literal("")),
  genus: z.string().min(3).max(30),
  nativeArea: z.string().optional().nullish().or(z.literal("")),
  podrucjePorekla: z.string().optional().nullish().or(z.literal("")),
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
  watering: z.string().or(z.literal("")),
  zalivanje: z.string().or(z.literal("")),
  soil: z.string().or(z.literal("")),
  supstrat: z.string().or(z.literal("")),
  soilPH: z.string().or(z.literal("")),
  humidity: z.enum(["LOW", "MEDIUM", "HIGH"]).optional(),
  feeding: z.string().or(z.literal("")),
  prihrana: z.string().or(z.literal("")),
  minimalT: z.number(),
  optimalT: z.number(),
  speedOfGrowth: z.enum(["SLOW", "MODERATE", "FAST"]).optional(),
  matureSize: z.string().or(z.literal("")),
  velicina: z.string().or(z.literal("")),
  repotting: z.string().or(z.literal("")),
  presadjivanje: z.string().or(z.literal("")),
  flower: z.string().or(z.literal("")),
  cvet: z.string().or(z.literal("")),
  propagation: z.string().or(z.literal("")),
  razmnozavanje: z.string().or(z.literal("")),
  toxicity: z.enum(["TOXIC", "NOT_TOXIC", "NO_INFO"]).optional(),
  pests: z.string().or(z.literal("")),
  stetocine: z.string().or(z.literal("")),
  diseases: z.string().or(z.literal("")),
  bolesti: z.string().or(z.literal("")),
  imageCredits: z.string().or(z.literal("")),
  notes: z.string().or(z.literal("")),
  beleske: z.string().or(z.literal("")),

  published: z.enum(["PUBLISHED", "DRAFT", "REVIEW"]),
});

export const plantProfileFormSchema = plantProfileSchema.omit({ id: true });
