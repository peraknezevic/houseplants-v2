import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import type { ZodSchema } from 'zod';

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

export function zodSchemaToKeys(schema: ZodSchema) {
  const fields: Record<string, true> = {};
  const proxy = new Proxy(fields, {
    get(_, key) {
      if (key === 'then' || typeof key !== 'string') {
        return;
      }
      fields[key] = true;
    },
  });
  schema.safeParse(proxy);
  return fields;
}