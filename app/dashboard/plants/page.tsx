import prisma from "@/prisma/client";
import BoolBadge from "../_components/BoolBadge";
import Pagination from "../_components/Pagination";
import GenusFilterData from "./_components/GenusFilterData";
import AddNewButton from "../_components/AddNewButton";
import Actions from "../_components/Actions";
import Link from "next/link";

const cat = "plants";

interface Props {
  searchParams: {
    page: string;
    genus: string;
  };
}

const Plants = async ({ searchParams }: Props) => {
  const columns: string[] = ["Plant Name", "Type", "Image", "Actions"];
  const page = parseInt(searchParams.page) || 1;
  const pageSize = 50;
  const plants = await prisma.plant.findMany({
    where: {
      genusPageSlug: searchParams.genus,
    },
    orderBy: {
      slug: "asc",
    },
    skip: (page - 1) * pageSize,
    take: pageSize,
  });

  const plantCount = await prisma.plant.count({
    where: { genusPageSlug: searchParams.genus || undefined },
  });

  return (
    <div className="space-y-6">
      <div className="mx-auto mb-4 mt-4 flex justify-between gap-4">
        <AddNewButton cat={cat} />
        <GenusFilterData />
      </div>
      <table>
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column}>{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {plants.map((plant) => (
            <tr key={plant.id}>
              <td>{plant.botanicalName}</td>
              <td className="text-center text-sm font-medium uppercase">
                {(plant.isSpecies && "S") ||
                  (plant.isCultivar && "C") ||
                  (plant.isHybrid && "H") ||
                  (plant.isUnsorted && "U")}
              </td>
              <td>
                <BoolBadge bool={plant.hasImage} />
              </td>
              <td className="space-x-2">
                <Actions cat={cat} slug={plant.slug} />
              </td>
            </tr>
          ))}
        </tbody>
        <caption className="caption-bottom pt-4 text-sm font-medium uppercase">
          S - Species, C - Cultivar, H - Hybrid, U - Unsorted
        </caption>
      </table>
      <Pagination
        itemCount={plantCount}
        pageSize={pageSize}
        currentPage={page}
      />
    </div>
  );
};

export const dynamic = "force-dynamic";

export default Plants;
