import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const makeSlug = (text: string) => {
  return text
    .replaceAll(" ", "-")
    .replaceAll("'", "")
    .replaceAll('"', "")
    .toLowerCase();
};

const removeChars = (text: string) =>
  text
    .replaceAll("'", "")
    .replaceAll("‘", "")
    .replaceAll("’", "")
    .replaceAll('"', "")
    .replaceAll(" ", "")
    .toLowerCase();
