import prisma from "@/prisma/client";
import DeleteButton from "../_components/DeleteButton";
import EditButton from "../_components/EditButton";
import PublishedBadge from "../_components/PublishedBadge";
import ViewPage from "../_components/ViewPage";
import AddNewButton from "../_components/AddNewButton";

const cat = "plant-profiles";

const PlantProfiles = async () => {
  const plantProfiles = await prisma.plantProfile.findMany();

  return (
    <div className="space-y-2">
      <div className="mb-4 mt-4 flex justify-between gap-4">
        <AddNewButton cat={cat} />
      </div>
      <div className="w-full overflow-x-auto">
        <table>
          <thead>
            <tr>
              <th>Botanical Name</th>
              <th>Published</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {plantProfiles.map((plantProfiles) => (
              <tr key={plantProfiles.id}>
                <td>{plantProfiles.botanicalName}</td>
                <td>
                  <PublishedBadge published={plantProfiles.published} />
                </td>
                <td>
                  <ViewPage cat={cat} slug={plantProfiles.slug} />
                  <EditButton cat={cat} slug={plantProfiles.slug} />
                  <DeleteButton cat={cat} slug={plantProfiles.slug} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export const dynamic = "force-dynamic";

export default PlantProfiles;
