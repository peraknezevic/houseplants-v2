export const makeSlug = (text: string) => {
  return text
    .replaceAll(" ", "-")
    .replaceAll("'", "")
    .replaceAll('"', "")
    .toLowerCase();
};
