import { AdminForm } from "@/components/admin/admin-form";

export default function NewItem({
  params,
}: {
  params: { contentType: string };
}) {
  return (
    <div>
      <AdminForm category={params.contentType} actionType="new" />
    </div>
  );
}
