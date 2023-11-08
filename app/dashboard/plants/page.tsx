import prisma from "@/prisma/client";
import PageActions from "../_components/PageActions";
import DeleteButton from "../_components/DeleteButton";
import EditButton from "../_components/EditButton";
import BoolBadge from "../_components/BoolBadge";
import Pagination from "../_components/Pagination";
import GenusFilterData from "./_components/GenusFilterData";
import AddNewButton from "../_components/AddNewButton";

const cat = "plants";

interface Props {
  searchParams: {
    page: string;
  };
}

const Plants = async ({ searchParams }: Props) => {
  const page = parseInt(searchParams.page) || 1;
  const pageSize = 10;
  const plants = await prisma.plant.findMany({
    skip: (page - 1) * pageSize,
    take: pageSize,
  });

  const plantCount = await prisma.plant.count();

  return (
    <div className="space-y-2">
      <div className="mb-4 mt-4 flex justify-between gap-4">
        <AddNewButton cat={cat} />
        <GenusFilterData />
      </div>
      <div className="w-full overflow-x-auto">
        <table className="table border border-gray-200">
          <thead>
            <tr className="m-2">
              <th>Botanical Name</th>
              <th>Genus</th>
              <th>Type</th>
              <th>Image</th>
              <th>Image Credits</th>
              <th>Profile</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {plants.map((plant) => (
              <tr key={plant.id} className="hover:bg-gray-200">
                <td>{plant.botanicalName}</td>
                <td>
                  {plant.genusPageSlug.charAt(0).toUpperCase() +
                    plant.genusPageSlug.slice(1)}
                </td>
                <td>
                  {plant.isSpecies && "Species"}
                  {plant.isCultivar && "Cultivar"} {plant.isHybrid && "Hybrid"}
                </td>
                <td>
                  <BoolBadge bool={plant.hasImage} />
                </td>
                <td>
                  <BoolBadge bool={plant.imageCredits !== ""} />
                </td>
                <td>
                  <BoolBadge bool={plant.hasProfile} />
                </td>
                <td className="space-x-2">
                  <EditButton cat={cat} slug={plant.slug} />
                  <DeleteButton cat={cat} slug={plant.slug} />
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
