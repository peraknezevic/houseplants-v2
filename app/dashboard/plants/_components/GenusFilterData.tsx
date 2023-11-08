import prisma from "@/prisma/client";
import GenusFilters from "./GenusFilters";

const GenusFilterData = async () => {
  const genera = await prisma.genusPage.findMany();
  const generaSlugs = genera.map((g) => g.slug);

  return <GenusFilters genera={generaSlugs} />;
};

export default GenusFilterData;
