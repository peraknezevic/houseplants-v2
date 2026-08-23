import { Button } from "@/components/ui/button";
import ContentTable from "@/components/admin/content-table";
import Link from "next/link";
import { deletePage } from "@/lib/actions";
import { getPages } from "@/lib/data";

const AdminPagesPage = async () => {
  const pages = await getPages();

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Pages</h1>
        <Button asChild>
          <Link href="/admin/pages/new">New page</Link>
        </Button>
      </div>
      <ContentTable
        items={pages}
        editHrefBase="/admin/pages"
        deleteAction={deletePage}
      />
    </div>
  );
};

export default AdminPagesPage;
