import prisma from "@/prisma/client";
import BoolBadge from "../_components/BoolBadge";
import Pagination from "../_components/Pagination";
import GenusFilterData from "./_components/GenusFilterData";
import AddNewButton from "../_components/AddNewButton";
import Actions from "../_components/Actions";

const cat = "plants";

interface Props {
  searchParams: {
    page: string;
  };
}

const Plants = async ({ searchParams }: Props) => {
  const page = parseInt(searchParams.page) || 1;
  const pageSize = 50;
  const plants = await prisma.plant.findMany({
    skip: (page - 1) * pageSize,
    take: pageSize,
  });

  const plantCount = await prisma.plant.count();

  return (
    <div className="space-y-2">
      <div className="mx-auto mb-4 mt-4 flex justify-between gap-4">
        <AddNewButton cat={cat} />
        <GenusFilterData />
      </div>
      <div className="w-full overflow-x-auto">
        <table>
          <thead>
            <tr>
              <th>Botanical Name</th>
              <th>Type</th>
              <th>Image</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {plants.map((plant) => (
              <tr key={plant.id}>
                <td>{plant.botanicalName}</td>
                <td>
                  {plant.isSpecies && "Species"}
                  {plant.isCultivar && "Cultivar"} {plant.isHybrid && "Hybrid"}
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
        </table>
        <Pagination
          itemCount={plantCount}
          pageSize={pageSize}
          currentPage={page}
        />
      </div>
    </div>
  );
};

export const dynamic = "force-dynamic";

export default Plants;
