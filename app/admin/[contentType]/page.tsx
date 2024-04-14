import { AdminTable } from "@/components/admin/admin-table";
import { getItemsByCategory } from "@/lib/server-utils";

export default async function ContentPage({
  params,
}: {
  params: { contentType: string };
}) {
  const category = params.contentType;
  const items = await getItemsByCategory(category);

  return (
    <div>
      <AdminTable category={category} items={items} />
    </div>
  );
}
