import { Button } from "@/components/ui/button";
import ContentTable from "@/components/admin/content-table";
import Link from "next/link";
import { deletePlantProfile } from "@/lib/actions";
import { getPlantProfilesForAdmin } from "@/lib/data";

const AdminPlantProfilesPage = async () => {
  const plantProfiles = await getPlantProfilesForAdmin();

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Plant profiles</h1>
        <Button asChild>
          <Link href="/admin/plant-profiles/new">New plant profile</Link>
        </Button>
      </div>
      <ContentTable
        items={plantProfiles}
        editHrefBase="/admin/plant-profiles"
        deleteAction={deletePlantProfile}
      />
    </div>
  );
};

export default AdminPlantProfilesPage;
