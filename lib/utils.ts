export const makeSlug = (text: string) =>
  text
    .replaceAll(" ", "-")
    .replaceAll("'", "")
    .replaceAll('"', "")
    .toLowerCase();

export const removeChars = (text: string) =>
  text
    .replaceAll("'", "")
    .replaceAll("‘", "")
    .replaceAll("’", "")
    .replaceAll('"', "")
    .replaceAll(" ", "")
    .toLowerCase();

export const publishStatusClass = (status: string | undefined) => {
  switch (status) {
    case "PUBLISHED":
      return "text-emerald-800";
    case "DRAFT":
      return "text-gray-800";
    case "REVIEW":
      return "text-rose-800";
    default:
      return "text-emerald-800";
  }
};
