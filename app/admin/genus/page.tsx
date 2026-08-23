import { Button } from "@/components/ui/button";
import ContentTable from "@/components/admin/content-table";
import Link from "next/link";
import { deleteGenusPage } from "@/lib/actions";
import { getGenerasForAdmin } from "@/lib/data";

const AdminGenusPage = async () => {
  const generas = await getGenerasForAdmin();

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Genus pages</h1>
        <Button asChild>
          <Link href="/admin/genus/new">New genus page</Link>
        </Button>
      </div>
      <ContentTable
        items={generas}
        editHrefBase="/admin/genus"
        deleteAction={deleteGenusPage}
      />
    </div>
  );
};

export default AdminGenusPage;
