import { getPlantsCount, getPlantsForAdmin } from "@/lib/data";

import AdminPagination from "@/components/admin/admin-pagination";
import { Button } from "@/components/ui/button";
import ContentTable from "@/components/admin/content-table";
import Link from "next/link";
import { deletePlant } from "@/lib/actions";

const PAGE_SIZE = 100;

const AdminPlantsPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) => {
  const { page: pageParam } = await searchParams;
  const page = Math.max(1, Number(pageParam) || 1);

  const [plants, totalCount] = await Promise.all([
    getPlantsForAdmin({ skip: (page - 1) * PAGE_SIZE, take: PAGE_SIZE }),
    getPlantsCount(),
  ]);

  const totalPages = Math.max(1, Math.ceil(totalCount / PAGE_SIZE));

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Plants</h1>
        <Button asChild>
          <Link href="/admin/plants/new">New plant</Link>
        </Button>
      </div>
      <ContentTable
        items={plants}
        editHrefBase="/admin/plants"
        deleteAction={deletePlant}
      />
      <AdminPagination
        basePath="/admin/plants"
        page={page}
        totalPages={totalPages}
      />
    </div>
  );
};

export default AdminPlantsPage;
