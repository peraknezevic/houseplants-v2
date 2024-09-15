import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

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
