import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import type { ZodIssue, ZodSchema } from "zod";

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

export const enumToString = (value: string) => {
  return value.charAt(0) + value.slice(1).toLowerCase().replace("_", " ");
};
export const removeChars = (text: string) =>
  text
    .replaceAll("'", "")
    .replaceAll(".", "")
    .replaceAll("‘", "")
    .replaceAll("’", "")
    .replaceAll('"', "")
    .replaceAll(" × ", "-")
    .replaceAll(" ", "-")
    .toLowerCase();

export const findErrors = (fieldName: string, errors: ZodIssue[]) => {
  return errors
    .filter((item) => item.path.includes(fieldName))
    .map((item) => item.message);
};
