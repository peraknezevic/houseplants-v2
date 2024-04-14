import Actions from "../_components/dashboard-actions";
import AddNewButton from "../../../components/button-add-new";
import prisma from "@/prisma/client";

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
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {plantProfiles.map((profile) => (
              <tr key={profile.id}>
                <td className="lg:w-3/4">
                  <div
                    className={
                      (profile.published === "PUBLISHED" &&
                        "font-bold text-emerald-800 dark:text-emerald-600") ||
                      (profile.published === "DRAFT" &&
                        "font-bold text-gray-800 dark:text-gray-600") ||
                      (profile.published === "REVIEW" &&
                        "font-bold text-rose-800 dark:text-rose-600") ||
                      ""
                    }
                  >
                    {profile.botanicalName}
                  </div>
                  <div>{profile.slug}</div>
                </td>
                <Actions cat={cat} slug={profile.slug} />
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
