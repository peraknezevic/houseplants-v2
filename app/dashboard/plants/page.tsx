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
  const columns: string[] = ["Type", "Plant Name", "Image", "Actions"];
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
              <td>
                <div
                  className={`${
                    (plant.isSpecies && "bg-emerald-800") ||
                    (plant.isCultivar && "bg-violet-800") ||
                    (plant.isHybrid && "bg-blue-800") ||
                    (plant.isUnsorted && "bg-gray-800")
                  } mr-2
                  inline-block h-4 w-4
                  `}
                ></div>
              </td>
              <td>{plant.botanicalName}</td>
              <td>
                <BoolBadge bool={plant.hasImage} />
              </td>
              <td className="space-x-2">
                <Actions cat={cat} slug={plant.slug} />
              </td>
            </tr>
          ))}
        </tbody>
        <caption className="caption-bottom pt-4">
          <div className="mx-4 inline-block h-4 w-4 bg-emerald-800"></div>{" "}
          Species
          <div className="mx-4 inline-block h-4 w-4 bg-violet-800"></div>
          Cultivar
          <div className="mx-4 inline-block h-4 w-4 bg-blue-800"></div>
          Hybrid
          <div className="mx-4 inline-block h-4 w-4 bg-gray-800"></div>
          Unsorted
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
