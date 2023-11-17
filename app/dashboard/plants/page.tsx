import prisma from "@/prisma/client";
import Pagination from "../_components/Pagination";
import GenusFilterData from "./_components/GenusFilterData";
import AddNewButton from "../_components/AddNewButton";
import Actions from "../_components/Actions";

const cat = "plants";

interface Props {
  searchParams: {
    page: string;
    genus: string;
  };
}

const Plants = async ({ searchParams }: Props) => {
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
            <th>Plant Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {plants.map((plant) => (
            <tr key={plant.id}>
              <td className="lg:w-3/4">
                <div>
                  <span
                    className={
                      plant.hasImage
                        ? "font-bold text-emerald-800"
                        : "font-bold"
                    }
                  >
                    {plant.botanicalName}
                  </span>{" "}
                  <span className="ml-4 bg-gray-900 px-1 text-xs font-bold text-white">
                    {(plant.isSpecies && "S") ||
                      (plant.isCultivar && "C") ||
                      (plant.isHybrid && "H") ||
                      (plant.isUnsorted && "U")}
                  </span>
                </div>
                <div>{plant.slug}</div>
              </td>
              <Actions cat={cat} slug={plant.slug} />
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
