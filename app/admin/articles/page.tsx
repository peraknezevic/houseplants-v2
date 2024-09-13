import { AdminTable } from "@/components/admin/admin-table";
import { getPages } from "@/lib/server-utils";

export default async function ContentPage() {
  const items = await getPages();

  return (
    <div>
      <AdminTable category="articles" items={items} />
    </div>
  );
}
