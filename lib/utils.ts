export const makeSlug = (text: string) => {
  return text
    .replaceAll(" ", "-")
    .replaceAll("'", "")
    .replaceAll('"', "")
    .toLowerCase();
};

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
