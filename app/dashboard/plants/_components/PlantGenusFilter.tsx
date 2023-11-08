import prisma from "@/prisma/client";
import Filters from "../../_components/Filters";

const PlantGenusFilter = async () => {
  const genera = await prisma.genusPage.findMany();
  const generaSlugs = genera.map((g) => g.slug);

  return <Filters genera={generaSlugs} />;
};

export default PlantGenusFilter;
