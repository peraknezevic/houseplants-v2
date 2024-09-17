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
  intro: z.string().min(20).optional().or(z.literal("")),
  content: z.string().min(3),
  imageCredits: z.string().min(3).max(200).optional().or(z.literal("")),
  published: z.enum(["PUBLISHED", "DRAFT", "REVIEW"]),
  language: z.enum(["ENGLISH", "SRPSKI"]),
});

export const articleFormSchema = articleSchema.omit({ id: true });

export const generaSchema = z.object({
  id: z.string(),
  title: z.string().min(3).max(150),
  slug: z.string().min(3).max(150),
  intro: z.string(),
  thanks: z.string(),
  changeLog: z.string(),
  published: z.enum(["PUBLISHED", "DRAFT", "REVIEW"]),
});

export const generaFormSchema = generaSchema.omit({ id: true });

export const plantSchema = z.object({
  id: z.string(),
  slug: z.string().min(3).max(80),
  botanicalName: z.string().min(3).max(80),
  hasProfile: z.boolean().optional(),

  isSpecies: z.boolean().optional(),
  isCultivar: z.boolean().optional(),
  isHybrid: z.boolean().optional(),
  isUnsorted: z.boolean().optional(),

  children: z.string().optional(),
  parents: z.string().optional(),

  genusPageSlug: z.string().min(3).max(20),

  synonyms: z.string().min(3).max(500).optional().or(z.literal("")),
  tradeNames: z.string().min(3).max(250).optional().or(z.literal("")),
  commonNames: z.string().min(3).max(250).optional().or(z.literal("")),
  namedBy: z.string().min(3).max(100).optional().or(z.literal("")),
  inventor: z.string().min(3).max(100).optional().or(z.literal("")),
  patent: z.string().min(3).max(30).optional().or(z.literal("")),
  nativeArea: z.string().min(3).max(500).optional().or(z.literal("")),
  note: z.string().min(3).max(250).optional().or(z.literal("")),

  hasImage: z.boolean().optional(),
  imageCredits: z.string().min(3).max(200).optional().or(z.literal("")),
  imagesForApproval: z.string().min(3).optional().or(z.literal("")),
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
  inventor: z.string().optional().or(z.literal("")),
  patent: z.string().optional().or(z.literal("")),
  tradeNames: z.string().optional().or(z.literal("")),
  commonNames: z.string().optional().or(z.literal("")),
  narodniNaziv: z.string().optional().or(z.literal("")),
  family: z.string().optional().or(z.literal("")),
  subFamily: z.string().optional().or(z.literal("")),
  genus: z.string().min(3).max(30),
  nativeArea: z.string().optional().or(z.literal("")),
  podrucjePorekla: z.string().optional().or(z.literal("")),
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
  watering: z.string().optional().or(z.literal("")),
  zalivanje: z.string().optional().or(z.literal("")),
  soil: z.string().optional().or(z.literal("")),
  supstrat: z.string().optional().or(z.literal("")),
  soilPH: z.string().optional().or(z.literal("")),
  humidity: z.enum(["LOW", "MEDIUM", "HIGH"]).optional(),
  feeding: z.string().optional().or(z.literal("")),
  prihrana: z.string().optional().or(z.literal("")),
  minimalT: z.number().optional(),
  optimalT: z.number().optional(),
  speedOfGrowth: z.enum(["SLOW", "MODERATE", "FAST"]).optional(),
  matureSize: z.string().optional().or(z.literal("")),
  velicina: z.string().optional().or(z.literal("")),
  repotting: z.string().optional().or(z.literal("")),
  presadjivanje: z.string().optional().or(z.literal("")),
  flower: z.string().optional().or(z.literal("")),
  cvet: z.string().optional().or(z.literal("")),
  propagation: z.string().optional().or(z.literal("")),
  razmnozavanje: z.string().optional().or(z.literal("")),
  toxicity: z.enum(["TOXIC", "NOT_TOXIC", "NO_INFO"]).optional(),
  pests: z.string().optional().or(z.literal("")),
  stetocine: z.string().optional().or(z.literal("")),
  diseases: z.string().optional().or(z.literal("")),
  bolesti: z.string().optional().or(z.literal("")),
  imageCredits: z.string().optional().or(z.literal("")),
  notes: z.string().optional().or(z.literal("")),
  beleske: z.string().optional().or(z.literal("")),

  published: z.enum(["PUBLISHED", "DRAFT", "REVIEW"]),
});

export const plantProfileFormSchema = plantProfileSchema.omit({ id: true });