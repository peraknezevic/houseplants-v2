import prisma from "@/prisma/client";
import DeleteButton from "../_components/DeleteButton";
import EditButton from "../_components/EditButton";
import PublishedBadge from "../_components/PublishedBadge";
import ViewButton from "../_components/ViewButton";
import AddNewButton from "../_components/AddNewButton";
import Actions from "../_components/Actions";

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
            {plantProfiles.map((profile) => (
              <tr key={profile.id}>
                <td>{profile.botanicalName}</td>
                <td>
                  <PublishedBadge published={profile.published} />
                </td>
                <td className="space-x-2">
                  <Actions cat={cat} slug={profile.slug} />
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
